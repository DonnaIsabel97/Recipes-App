const path = require("path");
const express = require("express");
const app = express();
const PORT = 8080;
const userController = require("./controllers/userController");
const recipesController = require("./controllers/recipeController");

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.log || err.message);
  res
    .status(err.status || 500)
    .send({ error: err.message || "An unexpected error occurred" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
