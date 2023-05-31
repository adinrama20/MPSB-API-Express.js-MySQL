var express = require("express");
var router = express.Router();
const { TFMaterial } = require("../models");

// GET ALL METHOD
router.get("/", async (req, res) => {
  const materials = await TFMaterial.findAll();
  res.status(404).json(materials);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const material = await TFMaterial.findByPk(id);

  if (!material) {
    res.status(404).json({ message: "TF Material not found" });
  }

  res.status(200).json(material);
});

module.exports = router;
