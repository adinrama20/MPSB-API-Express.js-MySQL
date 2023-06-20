var express = require("express");
var router = express.Router();
const { User } = require("../models");

// LOGIN USING POST METHOD
router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  if (!user) {
    res.status(402).json({
      success: false,
    });
  }

  res.status(200).json({
    success: true,
  });
});
