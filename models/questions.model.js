const mongoose = require("mongoose");

const QuestionsSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  answers: [
    // isCorrectAnswer refers if the answer object is the correct one since its an MCQ based exam
    {
      text: { type: String, required: true },
      isCorrectAnswer: { type: Boolean, required: true, default: false },
    },
  ],
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("questions", QuestionsSchema);
