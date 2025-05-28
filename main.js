const express = require("express");
const mongoose = require("mongoose");
const nosqlRouter = require("./nosql");
const sqlRouter = require("./sql");

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Mount routers
app.use("/nosql", nosqlRouter);
app.use("/sql", sqlRouter);

app.listen(3000);
