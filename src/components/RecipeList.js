import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={Recipe.id} {...recipe} />;
        })}
      </div>
      <div>
        <button>Add Recipe</button>
      </div>
    </>
  );
};

export default RecipeList;
