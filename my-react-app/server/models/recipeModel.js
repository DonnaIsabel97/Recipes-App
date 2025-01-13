const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: false },
  directions: { type: String, required: false },
  category: { type: String, required: false },
});

module.exports = mongoose.model('Recipe', recipeSchema);
