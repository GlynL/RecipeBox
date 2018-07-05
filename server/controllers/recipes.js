const Recipe = require("../models/Recipe");

exports.getRecipes = (req, res) => {
  Recipe.find({})
    .then(results => res.json(results))
    .catch(err => console.log(err));
};

exports.getRecipe = (req, res) => {
  Recipe.findById(req.params.id)
    .then(results => res.json(results))
    .catch(err => console.log(err));
};

exports.addRecipe = (req, res) => {
  Recipe.create(req.body)
    .then(result => res.json(result))
    .catch(err => console.log(err));
};

exports.editRecipe = (req, res) => {
  Recipe.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => console.log(err));
};

exports.deleteRecipe = (req, res) => {
  Recipe.findByIdAndRemove(req.body._id)
    .then(result => res.json(result))
    .catch(err => console.log(err));
};
