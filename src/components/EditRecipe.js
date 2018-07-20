import React, { Component } from "react";
import RecipeCard from "./RecipeCard";
import "../styles/components/NewRecipe.scss";

class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: "",
        ingredients: [],
        method: [],
        _id: ""
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
    this.handleRemove = this.handleRemove.bind(this);
  }

  async handleClick() {
    const editedRecipe = await this.props.editRecipe(this.state.recipe);
    this.props.history.push(`/recipes/${editedRecipe._id}`);
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

  handleRemove(e, type, value, idx) {
    const results = [...this.state.recipe[type]];
    const newList = results.filter((val, i) => i !== idx);
    console.log(newList);
    this.setState({
      recipe: { ...this.state.recipe, [type]: newList }
    });
  }

  componentDidMount() {
    if (this.props.match && this.props.recipes.length > 0) {
      this.findRecipe();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.recipes !== prevProps.recipes) {
      this.findRecipe();
    }
  }

  findRecipe() {
    const id = this.props.match.params.id;
    const recipe = this.props.recipes.find(recipe => recipe._id === id);
    this.setState({ recipe });
  }

  render() {
    return (
      <div className="new-recipe">
        <header>
          <h1>Edit Recipe</h1>
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
          <button>Add Ingredient</button>
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
          <button>Add Step</button>
        </form>

        <button onClick={this.handleClick}>Save Recipe</button>

        <RecipeCard
          editRecipe={true}
          handleRemove={this.handleRemove}
          {...this.state.recipe}
        />
      </div>
    );
  }
}

export default EditRecipe;
