var express = require("express");
var router = express.Router();
const { StudentClass } = require("../models");

// GET ALL METHOD
router.get("/", async (req, res) => {
  const studentClasses = await StudentClass.findAll();
  res.status(404).json(studentClasses);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const studentClass = await StudentClass.findByPk(id);

  if (!studentClass) {
    res.status(404).json({ message: "Class not found" });
  }

  res.status(200).json(studentClass);
});

module.exports = router;
