const User = require("../models/User.model");
const Response = require("../utils/jsonResponse");
const { encode } = require("../utils/jwt");

class UserController {
  static async login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }, (err, userDoc) => {
      if (err || userDoc == null) {
        return res
          .status(404)
          .send(Response({ isSuccess: false, message: "No such user" }));
      }

      userDoc.comparePasswords(password, (message, isCorrect) => {
        if (isCorrect) {
          const accessToken = encode(userDoc.toJSON());
          res
            .set("Authorization", accessToken)
            .status(200)
            .send(Response({ isSuccess: true, data: userDoc }));
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
              data: doc,
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
}

module.exports = UserController;
