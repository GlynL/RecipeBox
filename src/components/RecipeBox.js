import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Banner from "./Banner";
import NewRecipe from "./NewRecipe";
import AllRecipes from "./AllRecipes";
import Recipe from "./Recipe";
import EditRecipe from "./EditRecipe";
import Register from "./Register";
import * as api from "../apis/recipes";

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  async addRecipe(recipe) {
    const newRecipe = await api.postRecipe(recipe);
    const recipes = [...this.state.recipes, newRecipe];
    this.setState({ recipes });
  }

  async editRecipe(recipe) {
    const editedRecipe = await api.putRecipe(recipe);
    const recipes = this.state.recipes.map(
      item => (item._id === editedRecipe._id ? editedRecipe : item)
    );
    this.setState({ recipes });
    return editedRecipe;
  }

  async removeRecipe(recipe) {
    await api.deleteRecipe(recipe);
    const recipes = this.state.recipes.filter(item => item._id !== recipe._id);
    this.setState({ recipes });
  }

  async componentDidMount() {
    const recipes = await api.getRecipes();
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
          <Route
            exact
            path="/recipes/:id"
            render={props => (
              <Recipe
                {...props}
                recipes={this.state.recipes}
                removeRecipe={this.removeRecipe}
              />
            )}
          />
          <Route
            path="/recipes/edit/:id"
            render={props => (
              <EditRecipe
                {...props}
                recipes={this.state.recipes}
                editRecipe={this.editRecipe}
              />
            )}
          />
          <Route path="/user/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default RecipeBox;
