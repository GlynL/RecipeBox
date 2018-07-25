import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Banner from "./Banner";
import NewRecipe from "./NewRecipe";
import AllRecipes from "./AllRecipes";
import Recipe from "./Recipe";
import EditRecipe from "./EditRecipe";
import Register from "./Register";
import Home from "./Home";
import * as api from "../apis/recipes";
import * as userApi from "../apis/users";

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      user: {
        isAuthenticated: false,
        info: {}
      }
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.authUser = this.authUser.bind(this);
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

  async authUser(user, type) {
    try {
      let authedUser;
      if (type === "login") {
        authedUser = await userApi.loginUser(user);
      }
      if (type === "register") {
        authedUser = await userApi.registerUser(user);
      }
      if (type === "logout") {
        localStorage.clear();
        this.setState({ user: { isAuthenticated: false, info: {} } });
        this.props.history.push("/");
        return;
      }
      const updatedUser = { isAuthenticated: true, info: authedUser };
      this.setState({ user: updatedUser });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Banner
          isAuthenticated={this.state.user.isAuthenticated}
          authUser={this.authUser}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                isAuthenticated={this.state.user.isAuthenticated}
              />
            )}
          />
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
          <Route
            path="/users/register"
            render={props => (
              <Register {...props} type={"register"} authUser={this.authUser} />
            )}
          />
          <Route
            path="/users/login"
            render={props => (
              <Register {...props} type={"login"} authUser={this.authUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(RecipeBox);
