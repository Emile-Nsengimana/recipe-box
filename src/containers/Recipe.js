import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import "./Recipe.css";
import RecipeList from "../components/RecipeList/RecipeList";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Modal from "../components/Modal/Modal";
import AddRecipeForm from "../components/Form/AddRecipeForm";
import { recipes } from "../data/dummy-data";

const Recipe = () => {
  const savedRecipe = JSON.parse(window.localStorage.getItem("saved-recipes"));

  const [recipe, setRecipe] = useState(
    savedRecipe !== null ? recipes.concat(savedRecipe) : recipes
  );
  const [activeRecipe, setActiveRecipe] = useState(recipe[0]);
  const [addRecipe, setAddRecipe] = useState(false);

  const handleChangeActiveRecipe = (name) => {
    const _recipe = recipe.filter((rec) => rec.name === name);
    setActiveRecipe(..._recipe);
  };

  const handleRemoveRecipe = (name) => {
    const recipeIndex = recipe.findIndex((rec) => rec.name === name);
    recipe.splice(recipeIndex, 1);
    if (recipe) setActiveRecipe(recipe[0]);
  };
  const handleToggleAddRecipe = () => {
    setAddRecipe(!addRecipe);
  };

  const [ingredientInput, setIngredientInput] = useState([
    {
      type: "text",
      className: "txt-input",
      name: "ingredient",
    },
  ]);

  const handleAddIngredientField = (e) => {
    e.preventDefault();
    setIngredientInput([
      ...ingredientInput,
      {
        type: "text",
        className: "txt-input",
        name: "ingredient",
      },
    ]);
  };

  const [ingredientStepInput, setIngredientStepInput] = useState([
    {
      type: "text",
      className: "txt-input",
      name: "step",
    },
  ]);

  const handleAddIngredientStepField = (e) => {
    e.preventDefault();
    setIngredientStepInput([
      ...ingredientStepInput,
      {
        type: "text",
        className: "txt-input",
        name: "step",
      },
    ]);
  };

  const [ingredient, setIngredient] = useState({});

  const handleAddIngredient = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    ingredient[name] = value;
    setIngredient({ ...ingredient });
  };

  const [step, setStep] = useState({});
  const handleAddStep = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    step[name] = value;
    setStep({ ...step });
  };

  const [recipeName, setRecipeName] = useState("");
  const handleAddRecipeName = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setRecipeName(value);
  };
  const handleAddRecipe = (e) => {
    e.preventDefault();

    const newRecipe = {
      name: recipeName,
      ingredients: Object.values(ingredient),
      steps: Object.values(step),
    };
    setRecipe([...recipe, newRecipe]);
    setAddRecipe(!addRecipe);
  };

  useEffect(() => {
    const addedRecipes = recipe.filter((rec) => recipes.indexOf(rec) === -1);
    window.localStorage.setItem("saved-recipes", JSON.stringify(addedRecipes));
  }, [recipe]);

  return (
    <div>
      <NavBar />
      <div className="content">
        <RecipeList
          addRecipe={handleToggleAddRecipe}
          viewRecipe={handleChangeActiveRecipe}
          recipes={recipe}
        />
        <RecipeDetails
          removeRecipe={handleRemoveRecipe}
          recipe={activeRecipe}
        />

        <Modal show={addRecipe} cancel={handleToggleAddRecipe}>
          <AddRecipeForm
            ingredientInput={ingredientInput}
            ingredientStepInput={ingredientStepInput}
            addIngredientField={handleAddIngredientField}
            addStepField={handleAddIngredientStepField}
            saveRecipe={handleAddRecipe}
            addIngredient={handleAddIngredient}
            addStep={handleAddStep}
            addRecipeName={handleAddRecipeName}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Recipe;
