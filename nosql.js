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

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

router.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.send(user);
});

router.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.send({ message: "User deleted successfully" });
});

module.exports = router;
