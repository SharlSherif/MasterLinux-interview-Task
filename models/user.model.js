const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const ObjectID = mongoose.Types.ObjectId;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  type: {
    enum: ["examiner", "candidate"],
    type: String,
    default: "candidate",
  },
  enrolledExams: [
    // contains the exam id of each "exam" the "candidate" user enrolled in as well as final grade of that candidate
    {
      exam: { type: ObjectID, ref: "exam" },
      grade: {
        type: Number,
      },
    },
  ],
  createdExams: [
    // exams created by the "examiner" user type
    {
      exam: { type: ObjectID, ref: "exam" },
    },
  ],
  // all the questions created by that user, only filled when the user type is "examiner"
  questions: [
    {
      type: [ObjectID],
      ref: "questions",
    },
  ],
  createdAt: {
    type: Date,
  },
});

UserSchema.methods.comparePasswords = function (plainTextPassword, cb) {
  console.log(this.password);
  const isCorrectPassword = bcrypt.compareSync(
    plainTextPassword,
    this.password
  );

  if (isCorrectPassword) {
    return cb(null, true);
  } else {
    return cb("Doesn't match", false);
  }
};

UserSchema.pre("save", function (next) {
  if (this.password) {
    // generate a salt for each password
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

module.exports = mongoose.model("user", UserSchema);
