const path = require("path");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Multi-DB Express API",
      version: "1.0.0",
      description: "API documentation for SQL and NoSQL endpoints",
    },
  },
  apis: [
    path.join(__dirname, "nosql.docs.js"),
    path.join(__dirname, "sql.docs.js"),
  ],
};

module.exports = swaggerOptions;
