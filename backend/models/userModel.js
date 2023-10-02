const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
      default: "https://icons8.com/icon/tZuAOUGm9AuS/user-default",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userModel);

module.exports = Users;
