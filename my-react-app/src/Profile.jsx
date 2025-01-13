import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Fetch saved recipes when component mounts
    fetchSavedRecipes();
  }, []);

  const fetchSavedRecipes = async () => {
    try {
      const res = await fetch('http://localhost:8080/savedRecipes', {
        method: 'GET',
      });
      if (res.ok) {
        const data = await res.json();
        setSavedRecipes(data);
      } else {
        console.error('Failed to fetch saved recipes');
      }
    } catch (error) {
      console.error('Error fetching saved recipes:', error);
    }
  };

  return (
    <div className='profile-container'>
      <h2>Your Favorite Recipes</h2>
      <div className='saved-recipes'>
        {savedRecipes.length === 0 ? (
          <p>No favorite recipes yet.</p>
        ) : (
          <ul>
            {savedRecipes.map((recipe) => (
              <li key={recipe.idMeal}>
                <Link to={`/recipe/${recipe.idMeal}`}>
                  <h3>{recipe.strMeal}</h3>
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Profile;
