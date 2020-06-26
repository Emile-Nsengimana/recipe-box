import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = props => {
  return (
    <div className="recipe-details">
      {props.recipe ? (
        <div className="recipe-box">
          <h3>Ingredients</h3>
          {props.recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
          <h3>Steps</h3>
          {props.recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
          <button
            className="btn btn-danger"
            onClick={() => props.removeRecipe(props.recipe.name)}
          >
            Delete
          </button>
          <button
            className="btn btn-warn"
          >
            Edit
          </button>
        </div>
      ) : (
        <h3>Oops! no recipe found please add recipe</h3>
      )}
    </div>
  );
};

export default RecipeDetails;
