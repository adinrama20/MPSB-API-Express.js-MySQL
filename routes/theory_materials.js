var express = require("express");
var router = express.Router();
const { TheoryMaterial } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const materials = await TheoryMaterial.findAll();
  res.status(200).json(materials);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const material = await TheoryMaterial.findByPk(id);

  if (!material) {
    res.status(404).json({ message: "Theory material not found" });
  }

  res.status(200).json(material);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    name: "string",
    material_file: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const material = await TheoryMaterial.create(req.body);
  res.status(201).json(material);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let material = await TheoryMaterial.findByPk(id);

  if (!material) {
    res.status(404).json({ message: "Theory material not found" });
  }

  const schema = {
    name: "string|optional",
    material_file: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  material = await material.update(req.body);
  res.status(201).json(material);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let material = await TheoryMaterial.findByPk(id);

  if (!material) {
    res.status(404).json({ message: "Theory material not found" });
  }

  material = await material.destroy();
  res.status(201).json({ message: "Theory material is deleted" });
});

module.exports = router;
