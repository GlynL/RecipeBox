import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Banner from "./Banner";
import NewRecipe from "./NewRecipe";
import AllRecipes from "./AllRecipes";

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: "mashed potato",
          ingredients: ["potato", "milk"],
          method: ["boil potatoes", "add milk & mash"]
        }
      ]
    };

    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe) {
    this.setState({ recipes: [...this.state.recipes, recipe] });
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
