var express = require("express");
var router = express.Router();
const { TFUser } = require("../models");
const Validator = require("fastest-validator");

const v = new Validator();

// GET ALL METHOD
router.get("/", async (req, res) => {
  const tf_users = await TFUser.findAll();
  res.status(404).json(tf_users);
});

// GET BY ID METHOD
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const tf_user = await TFUser.findByPk(id);

  if (!tf_user) {
    res.status(404).json({ message: "TF User not found" });
  }

  res.status(200).json(tf_user);
});

// POST METHOD
router.post("/", async (req, res) => {
  const schema = {
    answer: "string",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  const tf_user = await tf_user.create(req.body);
  res.status(201).json(tf_user);
});

// PUT METHOD
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let tf_user = await TFUser.findByPk(id);

  if (!tf_user) {
    res.status(404).json({ message: "TF User not found" });
  }

  const schema = {
    answer: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  tf_user = await tf_user.update(req.body);
  res.status(201).json(tf_user);
});

// DELETE METHOD
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  let tf_user = await TFUser.findByPk(id);

  if (!tf_user) {
    res.status(404).json({ message: "TF User not found" });
  }

  tf_user = await tf_user.destroy();
  res.status(201).json({ message: "TF User is deleted" });
});

module.exports = router;
