const path = require("path");
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const session = require('express-session');
const MongoStore = require('connect-mongo';)
const userController = require("./controllers/userController");
const recipesController = require("./controllers/recipeController");

dotenv.config();
app.use(cors());
app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.log || err.message);
  res
    .status(err.status || 500)
    .send({ error: err.message || "An unexpected error occurred" });
});

app.use(
  session({
    // secret key for session encryption
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    // don't fore resave of session
    resave: false,
    // don't save empty session
    saveUninitialized: false,
    // cookie age 
    cookie: { maxAge: 3600000, secure: false },
    store: MongoStore.create({
      // mongodb connection uri
      mongoUrl: process.env.MONGODB_URI,
      // session collection name in mongodb
      collectionName: 'sessions',
    }),
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(()=> console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// GET request



// POST 

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
