var express = require("express");
var router = express.Router();
const { User } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// REGISTER USING POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    username: "string",
    email: "string",
    password: "string",
    status: "boolean",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const user = await User.create(req.body);
  res.status(201).json(user);
});
