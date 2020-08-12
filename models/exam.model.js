const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const ExamSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions:[{
    type: [ObjectID],
    ref: "questions",
  }],
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("exam", ExamSchema);
