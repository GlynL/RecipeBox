import React from "react";

const Recipe = ({ name, ingredients, method }) => (
  <div className="recipe-preview">
    <h2>{name || "Recipe"}</h2>
    <h3>Ingredients</h3>
    <p>
      {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
    </p>
    <h3>Method</h3>
    <ol>{method.map((step, idx) => <li key={idx}>{step}</li>)}</ol>
  </div>
);

export default Recipe;
