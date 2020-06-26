import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import RecipeList from "../components/RecipeList/RecipeList";
import { recipes } from "../data/dummy-data";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";

import "./Recipe.css";


const Recipe = () => {
  const [recipe, setRecipe] = useState(recipes);
  const [activeRecipe, setActiveRecipe] = useState(recipe[0]);

  return (
    <div>
      <NavBar />
      <div className="content">
        <RecipeList
          recipes={recipe}
        />
        <RecipeDetails
          recipe={activeRecipe}
        />

        </div>
    </div>
  );
};

export default Recipe;
