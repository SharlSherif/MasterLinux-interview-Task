const User = require("../models/user.model");
const Exam = require("../models/exam.model");
const Response = require("../utils/jsonResponse");
const { encode } = require("../utils/jwt");

class UserController {
  static async login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }, (err, user) => {
      if (err || user == null) {
        return res
          .status(404)
          .send(Response({ isSuccess: false, message: "No such user" }));
      }

      user.comparePasswords(password, (message, isCorrect) => {
        if (isCorrect) {
          const accessToken = encode(user.toJSON());
          res
            .set("Authorization", accessToken)
            .status(200)
            .send(
              Response({
                isSuccess: true,
                data: { user, accessToken },
                accessToken,
              })
            );
        } else {
          res
            .status(401)
            .send(
              Response({ isSuccess: false, message: "Password is incorrect" })
            );
        }
      });
    });
  }

  static async signup(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const type = req.body.type;

    User.create({ username, password, type })
      .then((doc) => {
        const accessToken = encode(doc.toJSON());
        console.log(accessToken);

        res
          .set("Authorization", accessToken)
          .status(200)
          .send(
            Response({
              isSuccess: true,
              data: { user, accessToken },
              message: "User created",
            })
          );
      })
      .catch((err) => {
        res.status(400).send(
          Response({
            isSuccess: false,
            message: err,
          })
        );
      });
  }

  static takeAnExam = async (req, res) => {
    const { examID, answers } = req.body;
    console.log(req.body);
    try {
      let exam = await Exam.findById(examID).populate("questions");
      // if the exam doesnt exist
      if (exam == null) {
        return res.status(400).send(
          Response({
            isSuccess: false,
            message: "Couldnt find the exam",
          })
        );
      }

      let overallScore = 0;

      for (let questionOriginal of exam.questions) {
        for (let { answerID, questionID } of answers) {
          if (questionID == questionOriginal._id) {
            let actualCorrectAnswer = questionOriginal.answers.find(
              (answer) => answer.isCorrectAnswer == true
            );
            if (actualCorrectAnswer._id == answerID) {
              console.log("the correct answer was chosen!!");
              overallScore += 2;
            }
          }
        }
      }

      console.log(`overall score is ${overallScore}`);
      await this.updateUserScore(req.user._id, exam._id, overallScore);

      return res.status(200).send(
        Response({
          isSuccess: true,
          data: overallScore,
          message: "Exam submission is completed",
        })
      );
    } catch (e) {
      console.log(e);
      res.status(400).send(
        Response({
          isSuccess: false,
          message: e,
        })
      );
    }
  };

  static async updateUserScore(userID, examID, overallScore) {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate(userID, {
        $push: {
          enrolledExams: { exam: examID, grade: overallScore },
        },
        new: true,
      })
        .then((doc) => {
          console.log(doc);
          resolve(doc);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = UserController;
