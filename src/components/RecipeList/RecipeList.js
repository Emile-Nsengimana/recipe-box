import React from "react";
import "./RecipeList.css";

const RecipeList = (props) => {
  let recipes = null;
  if (props.recipes) {
    recipes = props.recipes.map((rec) => (
      <ul>
        <li key={rec.name} onClick={() => props.viewRecipe(rec.name)}>
          {rec.name}
        </li>
      </ul>
    ));
  }

  return (
    <>
      <div className="side-drawer">
        <button className="btn" onClick={props.addRecipe}>
          Add recipe
        </button>

        <hr />
        <ul className="recipe-list">{recipes}</ul>
      </div>
    </>
  );
};

export default RecipeList;
