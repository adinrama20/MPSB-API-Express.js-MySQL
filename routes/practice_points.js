var express = require("express");
var router = express.Router();
const { PracticePoint } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const points = await PracticePoint.findAll();
  res.status(404).json(points);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const point = await PracticePoint.findByPk(id);

  if (!point) {
    res.status(404).json({ message: "Practice point not found" });
  }

  res.status(200).json(point);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    point: "integer",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const point = await PracticePoint.create(req.body);
  res.status(201).json(point);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let point = await PracticePoint.findByPk(id);

  if (!point) {
    res.status(404).json({ message: "Practice point not found" });
  }

  const schema = {
    point: "integer|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  point = await point.update(req.body);
  res.status(201).json(point);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let point = await PracticePoint.findByPk(id);

  if (!point) {
    res.status(404).json({ message: "Practice point not found" });
  }

  point = await point.destroy();
  res.status(201).json({ message: "Practice point is deleted" });
});

module.exports = router;
