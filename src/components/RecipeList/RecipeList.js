import React from "react";
import "./RecipeList.css";

const RecipeList = (props) => {
  const { recipes } = props;
  const recipeList = recipes.map((rec) => (
    <li
      key={rec.name}
      onClick={() => {
        props.viewRecipe(rec.name);
      }}
    >
      {rec.name}
    </li>
  ));

  return (
    <>
      <div className="side-drawer">
        <button className="btn" onClick={props.addRecipe}>
          Add recipe
        </button>

        <hr />
        <ul className="recipe-list">{recipeList}</ul>
      </div>
    </>
  );
};

export default RecipeList;
