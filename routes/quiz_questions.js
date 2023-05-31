var express = require("express");
var router = express.Router();
const { QuizQuestion } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const questions = await QuizQuestion.findAll();
  res.status(404).json(questions);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const question = await QuizQuestion.findByPk(id);

  if (!question) {
    res.status(404).json({ message: "Quiz question not found" });
  }

  res.status(200).json(question);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    question: "text",
    optionA: "string",
    optionB: "string",
    optionC: "string",
    optionD: "string",
    questKey: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const question = await QuizQuestion.create(req.body);
  res.status(201).json(question);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let question = await QuizQuestion.findByPk(id);

  if (!question) {
    res.status(404).json({ message: "Quiz question not found" });
  }

  const schema = {
    question: "text|optional",
    optionA: "string|optional",
    optionB: "string|optional",
    optionC: "string|optional",
    optionD: "string|optional",
    questKey: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  question = await question.update(req.body);
  res.status(201).json(question);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let question = await QuizQuestion.findByPk(id);

  if (!question) {
    res.status(404).json({ message: "Quiz question not found" });
  }

  question = await question.destroy();
  res.status(201).json({ message: "Quiz question is deleted" });
});

module.exports = router;
