const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const ExamSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Author: {
    // note that the author has to be an "examiner" type user
    type: [ObjectID],
    ref: "user",
  },
  enrolled: [
    // contains the user id of each "candidate" enrolled in the exam as well as the final grade of that candidate
    {
      user: ObjectID,
      grade: {
        type: Number,
      },
    },
  ],
  questions:[{
    type: [ObjectID],
    ref: "questions",
  }],
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("exam", ExamSchema);
