var express = require("express");
var router = express.Router();
const { Practice } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const practices = await Practice.findAll();
  res.status(404).json(practices);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const practice = await Practice.findByPk(id);

  if (!practice) {
    res.status(404).json({ message: "Practice not found" });
  }

  res.status(200).json(practice);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    case_study: "text",
    type: "boolean",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const practice = await Practice.create(req.body);
  res.status(201).json(practice);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let practice = await Practice.findByPk(id);

  if (!practice) {
    res.status(404).json({ message: "Practice not found" });
  }

  const schema = {
    name: "string|optional",
    case_study: "text|optional",
    type: "boolean|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  practice = await practice.update(req.body);
  res.status(201).json(practice);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let practice = await Practice.findByPk(id);

  if (!practice) {
    res.status(404).json({ message: "Practice not found" });
  }

  practice = await practice.destroy();
  res.status(201).json({ message: "Practice is deleted" });
});

module.exports = router;
