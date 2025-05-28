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

module.exports = router;
