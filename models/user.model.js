const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
  },
  type: {
    enum: ["examiner", "candidate"],
    default: "candidate",
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("user", UserSchema);
