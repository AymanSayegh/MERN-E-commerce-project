const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      maxLength: 50,
      minLength: 2,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: 8,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      maxLength: 150,
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      required: [true, "role is required"],
      maxLength: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
