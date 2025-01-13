import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // using this instead of   window.location.pathname

function RecipeDetails() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (idMeal) {
      fetchRecipeDetails(idMeal);
    }
  }, [idMeal]);

  const fetchRecipeDetails = async (idMeal) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await res.json();
      setRecipe(data.meals ? data.meals[0] : null);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      setLoading(false);
    }
  };

  return <div className='title'>Recipe Details</div>;
}

export default RecipeDetails;
