const express = require("express");
const mongoose = require("mongoose");
const nosqlRouter = require("./routes/nosql");
const sqlRouter = require("./routes/sql");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./documents");

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

// Setup Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000);
