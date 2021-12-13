import React from "react";

const Recipe = () => {
  return (
    <div>
      <div>
        <h1>Plain Chicken</h1>

        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook time:</span>
        <span>1:45</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>3</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>do this and that</div>
      </div>
    </div>
  );
};

export default Recipe;
