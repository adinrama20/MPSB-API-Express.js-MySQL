var express = require("express");
var router = express.Router();
const { Quiz } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const quizzes = await Quiz.findAll();
  res.status(404).json(quizzes);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const quiz = await Quiz.findByPk(id);

  if (!quiz) {
    res.status(404).json({ message: "Quiz not found" });
  }

  res.status(200).json(quiz);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    name: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const quiz = await Quiz.create(req.body);
  res.status(201).json(quiz);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let quiz = await Practice.findByPk(id);

  if (!quiz) {
    res.status(404).json({ message: "Quiz not found" });
  }

  const schema = {
    name: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  quiz = await quiz.update(req.body);
  res.status(201).json(quiz);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let quiz = await Quiz.findByPk(id);

  if (!quiz) {
    res.status(404).json({ message: "Quiz not found" });
  }

  quiz = await quiz.destroy();
  res.status(201).json({ message: "Quiz is deleted" });
});

module.exports = router;
