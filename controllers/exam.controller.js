const Exam = require("../models/exam.model");
const User = require("../models/user.model");
const QuestionsSchema = require("../models/questions.model");
const Response = require("../utils/jsonResponse");

class ExamController {
  static async create(req, res) {
    const title = req.body.title;

    try {
      let randomQuestions = new Set();
      let questions = await QuestionsSchema.find({}).limit(30);

      for (let question in questions) {
        // we only need 10 random questions
        if (randomQuestions.size >= 10) {
          break;
        }
        randomQuestions.add(
          questions[Math.floor(Math.random() * questions.length)]._id
        );
      }
      console.log(
        randomQuestions,
        randomQuestions.size,
        Array.from(randomQuestions)
      );
      let newExam = await Exam.create({
        title,
        questions: Array.from(randomQuestions),
      });

      if (newExam !== null) {
        res.status(201).send(
          Response({
            isSuccess: true,
            data: newExam,
            message: "Exam is created!",
          })
        );
      }
    } catch (e) {
      res.status(400).send(
        Response({
          isSuccess: false,
          message: e,
        })
      );
    }
  }

  static async getData(req, res) {
    Exam.find()
      .then((doc) => {
        res.status(200).send(
          Response({
            isSuccess: true,
            data: doc,
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

  static async getExamGrade(req, res) {
    const examId = req.params.id;

    User.find({ enrolledExams: examId })
      .then((doc) => {
        res.status(200).send(
          Response({
            isSuccess: true,
            data: doc,
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

  static async getExamById(req, res) {
    Exam.findById(req.params.id).populate('questions')
      .then((doc) => {
        res.status(200).send(
          Response({
            isSuccess: true,
            data: doc,
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
}

module.exports = ExamController;
