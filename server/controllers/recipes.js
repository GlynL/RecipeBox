const Recipe = require("../models/Recipe");
const cloudinary = require("cloudinary"); /* don't need to config again */

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

exports.addRecipe = async (req, res) => {
  try {
    let recipe = req.body;
    recipe.image = {};
    recipe.image.url = req.file.secure_url;
    recipe.image.id = req.file.public_id;
    const newRecipe = await Recipe.create(recipe);
    res.json(newRecipe);
  } catch (err) {
    console.log(err);
  }
};

exports.editRecipe = (req, res) => {
  Recipe.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => console.log(err));
};

exports.deleteRecipe = async (req, res) => {
  try {
    const response = await Recipe.findByIdAndRemove(req.body._id);
    const result = await cloudinary.v2.uploader.destroy(req.body.image.id);
    if (result.result !== "ok") throw new Error("Error deleting image");
    return res.json(response);
  } catch (err) {
    console.log(err);
  }
};
