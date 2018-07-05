const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String
    // required: "name cannot be blank"
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
