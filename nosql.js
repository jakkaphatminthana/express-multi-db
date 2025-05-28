const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// MongoDB model
const User = mongoose.model("User", {
  name: String,
  email: String,
});

// MongoDB CRUD routes
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
