var express = require("express");
var router = express.Router();
const { UnderstandMaterial } = require("../models");

// GET ALL METHOD
router.get("/", async (req, res) => {
  const understands = await UnderstandMaterial.findAll();
  res.status(404).json(understands);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const understand = await UnderstandMaterial.findByPk(id);

  if (!understand) {
    res.status(404).json({ message: "Understand not found" });
  }

  res.status(200).json(understand);
});

module.exports = router;
