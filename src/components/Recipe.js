import React, { Component } from "react";
import { RingLoader } from "react-spinners";
import "../styles/components/Recipe.scss";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: "Recipe",
        ingredients: [],
        method: [],
        id: ""
      },
      loading: true
    };
  }

  componentDidMount() {
    // find recipe that matches id in route - ensure recipes array is populated first
    if (this.props.match && this.props.recipes.length > 0) this.findRecipe();
  }

  componentDidUpdate(prevProps) {
    // check for change in props -- necessary if array needed time to populate
    if (this.props.recipes !== prevProps.recipes) this.findRecipe();
  }

  findRecipe() {
    const id = this.props.match.params.id;
    const recipe = this.props.recipes.find(recipe => recipe._id === id);
    this.setState({ recipe, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="recipe">
          <RingLoader color={"#123abc"} loading={this.state.loading} />
        </div>
      );
    }
    return (
      <div className="recipe">
        <h2 className="recipe__title">{this.state.recipe.name}</h2>
        <h3 className="recipe__subtitle">Ingredients</h3>
        <ul className="recipe__list recipe__list--unordered">
          {this.state.recipe.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
        <h3 className="recipe__subtitle">Method</h3>
        <ol className="recipe__list recipe__list--ordered">
          {this.state.recipe.method.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Recipe;
