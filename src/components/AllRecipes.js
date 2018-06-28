import React from "react";
import Recipe from "./Recipe";

import "../styles/components/AllRecipes.scss";

const AllRecipes = props => {
  const recipes = props.recipes.map((recipe, idx) => (
    <Recipe key={idx} {...recipe} />
  ));

  return <div className="all-recipes">{recipes}</div>;
};

export default AllRecipes;
