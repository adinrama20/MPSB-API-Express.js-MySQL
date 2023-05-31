var express = require("express");
var router = express.Router();
const { TFQuestion } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const questions = await TFQuestion.findAll();
  res.status(404).json(questions);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const question = await TFQuestion.findByPk(id);

  if (!question) {
    res.status(404).json({ message: "TF Question not found" });
  }

  res.status(200).json(question);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    question: "string",
    answer: "boolean",
    point: "integer",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const question = await TFQuestion.create(req.body);
  res.status(201).json(question);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let question = await TFQuestion.findByPk(id);

  if (!question) {
    res.status(404).json({ message: "TF Question not found" });
  }

  const schema = {
    question: "string|optional",
    answer: "boolean|optional",
    point: "integer|optional",
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

  let question = await TFQuestion.findByPk(id);

  if (!question) {
    res.status(404).json({ message: "TF Question not found" });
  }

  question = await question.destroy();
  res.status(201).json({ message: "TF Question is deleted" });
});

module.exports = router;
