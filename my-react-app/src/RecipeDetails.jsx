import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // using this instead of   window.location.pathname

function RecipeDetails() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setisFavorite] = useState(false);

  useEffect(() => {
    if (idMeal) {
      fetchRecipeDetails(idMeal);
    } else {
      console.error('No Ide meal found.');
    }
  }, [idMeal]);

  const fetchRecipeDetails = async (idMeal) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await res.json();
      // console.log(data);
      setRecipe(data.meals ? data.meals[0] : null);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };
  if (!recipe) {
    return <div></div>;
  }
  // for ingredients there are up to 20 ingredients
  // for measuring there are up to 20 measures

  return (
    <div className='recipe-details'>
      <div className='recipe-container'>
        <h1 className='recipe-title'>{recipe.strMeal}</h1>
        <img
          className='recipe-image'
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <p className='recipe-category'>Category: {recipe.strCategory}</p>
        <p className='recipe-area'>Cuisine: {recipe.strArea}</p>

        <div className='ingredients-container'>
          <h3 className='ingredients-title'>Ingredients</h3>
          <ul>
            {Object.keys(recipe)
              .filter((key) => key.includes('strIngredient') && recipe[key])
              .map((key, index) => (
                <li className='ingredient-single' key={index}>
                  {recipe[key]}
                </li>
              ))}
          </ul>
          <div className='instructions-container'>
            <h3 className='instruction-title'>Instructions</h3>
            <p>{recipe.strInstructions}</p>
          </div>

          <button
            className='favorite-button'
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
