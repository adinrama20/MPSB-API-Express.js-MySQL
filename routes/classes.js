var express = require("express");
var router = express.Router();
const { Class } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const classes = await Class.findAll();
  res.status(404).json(classes);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const myClass = await Class.findByPk(id);

  if (!myClass) {
    res.status(404).json({ message: "Class not found" });
  }

  res.status(200).json(myClass);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    class_code: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const myClass = await Class.create(req.body);
  res.status(201).json(myClass);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let myClass = await Class.findByPk(id);

  if (!myClass) {
    res.status(404).json({ message: "Class not found" });
  }

  const schema = {
    class_code: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  myClass = await myClass.update(req.body);
  res.status(201).json(myClass);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let myClass = await Class.findByPk(id);

  if (!myClass) {
    res.status(404).json({ message: "Class not found" });
  }

  myClass = await myClass.destroy();
  res.status(201).json({ message: "Class is deleted" });
});

module.exports = router;
