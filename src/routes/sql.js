const express = require("express");
const { Pool } = require("pg");

const router = express.Router();

// Create a new Pool instance
const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
});

// Test the database connention
pool.query("SELECT 1", (err, result) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
  } else {
    console.log("Connected to the database");
  }
});

// PostgresSQL CRUD routes
router.get("/users", async (req, res) => {
  console.log("== postgresql", process.env.POSTGRES_URI);
  try {
    const result = await pool.query("SELECT * FROM users");
    res.send(result.rows);
  } catch (error) {
    console.error("Error executing query: ", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
      [name, email]
    );
    res.status(201).send(result.rows[0]);
  } catch (error) {
    console.error("Error executing query: ", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [
      userId,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.send(result.rows[0]);
  } catch (error) {
    console.error("Error executing query: ", error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.send(result.rows[0]);
  } catch (error) {
    console.error("Error executing query: ", error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [userId]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error executing query: ", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
