var express = require("express");
var router = express.Router();
const cors = require("cors");
const { User } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", cors(), async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// LOGIN USING POST METHOD
router.post("/login", cors(), async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  if (!user) {
    res.status(402).json({
      success: false,
    });
  }

  res.status(200).json({
    success: true,
  });
});

// REGISTER USING POST METHOD
router.post("/register", cors(), async (req, res) => {
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

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  const schema = {
    name: "string|optional",
    username: "string|optional",
    email: "string|optional",
    password: "string|optional",
    status: "boolean|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  user = await user.update(req.body);
  res.status(201).json(user);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  user = await user.destroy();
  res.status(201).json({ message: "User is deleted" });
});

module.exports = router;
