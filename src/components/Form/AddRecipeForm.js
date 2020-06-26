import React from "react";

const AddRecipeForm = (props) => {
  return (
    <form onSubmit={props.saveRecipe}>
      <h5>Name</h5>
      <input type="text" name="recipe-name" onChange={props.addRecipeName} />
      <div>
        <h5>Ingredients</h5>
        {props.ingredientInput.map((fld, i) => (
          <input
            onChange={props.addIngredient}
            name={fld.name + i}
            key={i}
            className={fld.className}
            type={fld.type}
          />
        ))}

        <button className="btn" onClick={props.addIngredientField}>
          Add
        </button>
      </div>

      <div>
        <h5>Steps</h5>
        {props.ingredientStepInput.map((fld, i) => (
          <input
            onChange={props.addStep}
            name={fld.name + i}
            key={i}
            className={fld.className}
            type={fld.type}
          />
        ))}

        <button className="btn" onClick={props.addStepField}>
          Add
        </button>
      </div>

      <button className="btn">Save recipe</button>
    </form>
  );
};

export default AddRecipeForm;
