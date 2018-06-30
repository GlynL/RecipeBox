const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/recipes");
mongoose.Promise = Promise;

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

// get all recipes
app.get("/api/recipes", (req, res) => {
  Recipe.find({})
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

// get single recipe
app.get("/api/recipes/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
});

// add new recipe
app.post("/api/recipes/new", (req, res) => {
  Recipe.create(req.body)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});

// todo: delete route - removing recipe

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
