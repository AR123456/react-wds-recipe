import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/app.css";
import uuidv4 from "uuid/v4";
export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "coodingWithReact.recipes";
function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);
  const recipeContextValue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
    handleRecipeChange: handleRecipeChange,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      //  uuidv4 for a unique id
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "instr.",
      ingredients: [
        {
          id: uuidv4(),
          name: "Ing Name",
          amount: "1 TBS",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    // creater a dup of array to mutate and set as new state
    const newRecipes = [...recipes];
    const index = newRecipes.findIndexJ((r) => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes}></RecipeList>
      <RecipeEdit></RecipeEdit>
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];
export default App;
