import React from "react";
import "./RecipeList.css";

const RecipeList = (props) => {
  const recipes = props.recipes.map((rec) => (
    <li key={rec.name}>
      {rec.name}
    </li>
  ));

  return (
    <>
      <div className="side-drawer">
        <button className="btn">
          Add recipe
        </button>

        <hr />
        <ul className="recipe-list">{recipes}</ul>
      </div>
    </>
  );
};

export default RecipeList;
