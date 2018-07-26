import React, { Component } from "react";
import Recipe from "./Recipe";
import "../styles/components/NewRecipe.scss";

class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: "Recipe Title",
        ingredients: [],
        method: []
      },
      ingredientInput: "",
      methodInput: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientSubmit = this.handleIngredientSubmit.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
    this.handleMethodSubmit = this.handleMethodSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addRecipe(this.state.recipe);
    const recipe = { name: "", ingredients: [], method: [] };
    this.setState({ recipe, ingredientInput: "", methodInput: "" });
    this.props.history.push("/recipes");
  }

  handleNameChange(e) {
    const recipe = { ...this.state.recipe, name: e.target.value };
    this.setState({ recipe });
  }

  handleIngredientSubmit(e) {
    e.preventDefault();
    const ingredients = [
      ...this.state.recipe.ingredients,
      this.state.ingredientInput
    ];
    this.setState({
      recipe: { ...this.state.recipe, ingredients },
      ingredientInput: ""
    });
  }

  handleIngredientChange(e) {
    this.setState({ ingredientInput: e.target.value });
  }

  handleMethodChange(e) {
    this.setState({ methodInput: e.target.value });
  }

  handleMethodSubmit(e) {
    e.preventDefault();
    const method = [...this.state.recipe.method, this.state.methodInput];
    this.setState({
      recipe: { ...this.state.recipe, method },
      methodInput: ""
    });
  }

  render() {
    return (
      <div className="new-recipe">
        <header>
          <h1>Add New Recipe</h1>
        </header>
        <input
          placeholder="Boiled Potatoes"
          aria-label="recipe title"
          className="recipe-form__input"
          type="text"
          id="name"
          name="name"
          value={this.state.recipe.name}
          onChange={this.handleNameChange}
        />
        <form onSubmit={this.handleIngredientSubmit} action="">
          <input
            placeholder="potatoes"
            aria-label="ingredient"
            id="ingredient"
            name="ingredient"
            type="text"
            value={this.state.ingredientInput}
            onChange={this.handleIngredientChange}
          />
          <button className="btn">Add Ingredient</button>
        </form>

        <form action="" onSubmit={this.handleMethodSubmit}>
          <input
            placeholder="boil potatoes"
            aria-label="method"
            type="text"
            id="method"
            name="method"
            value={this.state.methodInput}
            onChange={this.handleMethodChange}
          />
          <button className="btn">Add Step</button>
        </form>

        <button className="btn" onClick={this.handleClick}>
          Save Recipe
        </button>

        <Recipe recipe={this.state.recipe} />
      </div>
    );
  }
}

export default NewRecipe;
