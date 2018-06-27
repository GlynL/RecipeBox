import React from "react";
import Recipe from "./Recipe";

const AllRecipes = props => {
  const recipes = props.recipes.map((recipe, idx) => (
    <Recipe key={idx} {...recipe} />
  ));

  return <div>{recipes}</div>;
};

export default AllRecipes;
