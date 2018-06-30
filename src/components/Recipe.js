import React, { Component } from "react";
import { ClipLoader } from "react-spinners";
import { getRecipe } from "../apis/recipes";
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

  async componentDidMount() {
    if (this.props.match) {
      const id = this.props.match.params.id;
      const recipe = await getRecipe(id);
      this.setState({ recipe, loading: false });
    }
  }

  render() {
    if (this.state.loading)
      return (
        <div className="recipe">
          <ClipLoader color={"#123abc"} loading={this.state.loading} />
        </div>
      );
    else
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
