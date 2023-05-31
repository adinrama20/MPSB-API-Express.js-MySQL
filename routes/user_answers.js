var express = require("express");
var router = express.Router();
const { UserAnswer } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const answers = await UserAnswer.findAll();
  res.status(404).json(answers);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const answer = await UserAnswer.findByPk(id);

  if (!answer) {
    res.status(404).json({ message: "User answer not found" });
  }

  res.status(200).json(answer);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    answer: "string",
    status: "boolean",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const answer = await UserAnswer.create(req.body);
  res.status(201).json(answer);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let answer = await UserAnswer.findByPk(id);

  if (!answer) {
    res.status(404).json({ message: "User answer not found" });
  }

  const schema = {
    answer: "string",
    status: "boolean",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  answer = await answer.update(req.body);
  res.status(201).json(answer);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let answer = await UserAnswer.findByPk(id);

  if (!answer) {
    res.status(404).json({ message: "User answer not found" });
  }

  answer = await answer.destroy();
  res.status(201).json({ message: "User answer is deleted" });
});

module.exports = router;
