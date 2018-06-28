import React from "react";
import "../styles/components/Recipe.scss";

const Recipe = ({ name, ingredients, method }) => (
  <div className="recipe">
    <h2 className="recipe__title">{name || "Recipe"}</h2>
    <h3 className="recipe__subtitle">Ingredients</h3>
    <ul className="recipe__list recipe__list--unordered">
      {ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)}
    </ul>
    <h3 className="recipe__subtitle">Method</h3>
    <ol className="recipe__list recipe__list--ordered">
      {method.map((step, idx) => <li key={idx}>{step}</li>)}
    </ol>
  </div>
);

export default Recipe;
