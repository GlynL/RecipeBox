import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Banner from "./Banner";
import NewRecipe from "./NewRecipe";
import AllRecipes from "./AllRecipes";

import { getRecipes } from "../apis/recipes";

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe) {
    this.setState({ recipes: [...this.state.recipes, recipe] });
  }

  async componentDidMount() {
    const recipes = await getRecipes();
    this.setState({ recipes });
  }

  render() {
    return (
      <div>
        <Banner />
        <Switch>
          <Route
            exact
            path="/recipes"
            render={props => (
              <AllRecipes {...props} recipes={this.state.recipes} />
            )}
          />
          <Route
            path="/recipes/new"
            render={props => (
              <NewRecipe {...props} addRecipe={this.addRecipe} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default RecipeBox;
