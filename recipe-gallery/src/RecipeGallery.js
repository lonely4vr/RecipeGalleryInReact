import React from "react";
import { recipes } from "./recipes"; //importing named component

const RecipeGallery = () => {
  return (
    <div className="gallery">
      {recipes.map(recipe => ( //using map to iterate over recipes array
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeGallery;
