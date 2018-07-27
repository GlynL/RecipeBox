const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String
    // required: "name cannot be blank"
  },
  image: {
    url: {
      type: String
    },
    id: {
      type: String
    }
  },
  ingredients: {
    type: Array
  },
  method: {
    type: Array
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
