import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes, handleRecipeAdd, handleRecipeDelete }) => {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={Recipe.id}
              // passing this to Recipe.js where the delete button is
              handleRecipeDelete={handleRecipeDelete}
              {...recipe}
            />
          );
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
