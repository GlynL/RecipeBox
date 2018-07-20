import React from "react";
import "../styles/components/Recipe.scss";
import "../styles/components/RecipeCard.scss";

const RecipeCard = props => (
  <div className="recipe recipe--card" onClick={props.handleClick}>
    <h2 className="recipe__title">{props.name || "Recipe"}</h2>
    <h3 className="recipe__subtitle">Ingredients</h3>
    <ul className="recipe__list recipe__list--unordered">
      {props.ingredients.map((ingredient, idx) => (
        <li key={idx}>
          {ingredient}
          {props.editRecipe && (
            <button
              className="btn"
              onClick={e =>
                props.handleRemove(e, "ingredients", ingredient, idx)
              }
            >
              Remove
            </button>
          )}
        </li>
      ))}
    </ul>
    <h3 className="recipe__subtitle">Method</h3>
    <ol className="recipe__list recipe__list--ordered">
      {props.method.map((step, idx) => (
        <li key={idx}>
          {step}
          {props.editRecipe && (
            <button
              className="btn"
              onClick={e => props.handleRemove(e, "method", step)}
            >
              Remove
            </button>
          )}
        </li>
      ))}
    </ol>
  </div>
);

RecipeCard.defaultProps = {
  handleClick: () => {},
  name: "Recipe",
  ingredients: ["none"],
  method: ["no steps"]
};

export default RecipeCard;
