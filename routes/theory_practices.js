var express = require("express");
var router = express.Router();
const { TheoryPractice } = require("../models");

// GET ALL METHOD
router.get("/", async (req, res) => {
  const theory_pracs = await TheoryPractice.findAll();
  res.status(404).json(theory_pracs);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const theory_prac = await TheoryPractice.findByPk(id);

  if (!theory_prac) {
    res.status(404).json({ message: "Theory practice not found" });
  }

  res.status(200).json(theory_prac);
});

module.exports = router;
