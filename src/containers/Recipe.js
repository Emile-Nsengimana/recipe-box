import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import RecipeList from "../components/RecipeList/RecipeList";
import { recipes } from "../data/dummy-data";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";

import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState(recipes);
  const [activeRecipe, setActiveRecipe] = useState(recipe[0]);

  const handleChangeActiveRecipe = (name) => {
    const _recipe = recipe.filter((rec) => rec.name === name);
    setActiveRecipe(..._recipe);
  };

  const handleRemoveRecipe = (name) => {
    const recipeIndex = recipe.findIndex((rec) => rec.name === name);
    recipe.splice(recipeIndex, 1);
    if (recipe) setActiveRecipe(recipe[0]);
  };
  
  return (
    <div>
      <NavBar />
      <div className="content">
        <RecipeList viewRecipe={handleChangeActiveRecipe} recipes={recipe} />
        <RecipeDetails
          removeRecipe={handleRemoveRecipe}
          recipe={activeRecipe}
        />
      </div>
    </div>
  );
};

export default Recipe;
