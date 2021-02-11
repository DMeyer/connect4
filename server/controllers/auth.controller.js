var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  // user.save((err, user) => {

  // });
  res.status(201).json(user);
};

const login = (req, res) => {
  console.log("login");
  console.log(req.body);
  res.send({ message: "login" });
};

const refresh = (req, res) => {
  console.log("refresh");
  console.log(req.body);
  res.send({ message: "refresh" });
};

module.exports = {
  signup,
  login,
  refresh,
};
