const Recipe = require("../models/recipeModel");


const recipeController = {}

recipeController.getRecipes = async (req, res, next) => {
try{
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');

    if(!response){
        console.err('Failed to fetch data')
        next({
        log: "Failed to fetch data",
        status: 404,
        message: "Failed to fetch data",}
        )
    }

    const data = await response.json();

    res.locals.recipes = data;
    console.log(res.locals.recipes)
    next()

} catch(err){
    next(err)
}
}

recipeController.saveRecipes = async (req, res, next) => {
    try{

    } catch(err){
        next(err)
    }

}

recipeController.searchRecipes = async (req, res, next) => {
    try{

    } catch(err){
        next(err)
    }
}


module.exports = recipeController