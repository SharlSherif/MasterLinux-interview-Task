const Questions = require("../models/questions.model");
const Response = require("../utils/jsonResponse");
const { encode } = require("../utils/jwt");

class QuestionsController {
  static async create(req, res) {
    const text = req.body.text;
    const answers = req.body.answers;

    Questions.create({ text, answers })
      .then((doc) => {
        res.status(201).send(
          Response({
            isSuccess: true,
            data: doc,
            message: "Question added",
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

  static async getData(req, res) {
    Questions.find()
      .then((doc) => {
        res.status(201).send(
          Response({
            isSuccess: true,
            data: doc,
            message: "Question added",
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

module.exports = QuestionsController;
