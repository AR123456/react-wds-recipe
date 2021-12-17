import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

const RecipeEdit = () => {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"></input>
        <label htmlFor="cooktime">Cook Time</label>
        <input type="text" name="cookTime" id="cookTime"></input>
        <label htmlFor="servings">Servings</label>
        <input type="number" min="1" name="servings" id="servings"></input>
        <label htmlFor="instructions">Instructions</label>
        <textarea type="text" name="instructions" id="instructions"></textarea>
      </div>
      <br></br>
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit></RecipeIngredientEdit>
        <RecipeIngredientEdit></RecipeIngredientEdit>
      </div>
    </div>
  );
};

export default RecipeEdit;
