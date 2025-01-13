const Recipe = require('../models/recipeModel');

const recipeController = {};

recipeController.getRecipes = async (req, res, next) => {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    // www.themealdb.com/api/json/v1/1/search.php?s="variable"

    if (!response) {
      console.err('Failed to fetch data');
      next({
        log: 'Failed to fetch data',
        status: 404,
        message: 'Failed to fetch data',
      });
    }

    const data = await response.json();

    res.locals.recipes = data;
    //Example -> res.locals.user = { username: user.username, role: user.role_description, id: user.id };
    console.log(res.locals.recipes);
    next();
  } catch (err) {
    next(err);
  }
};

// This is going to be a POST request in server

recipeController.saveRecipes = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

recipeController.searchRecipesByName = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

recipeController.filterByArea = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = recipeController;
