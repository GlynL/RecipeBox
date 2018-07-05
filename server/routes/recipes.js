const express = require("express");
const router = express.Router();
const recipeControllers = require("../controllers/recipes");

// get all recipes
router.get("/", recipeControllers.getRecipes);

// get single recipe
router.get("/:id", recipeControllers.getRecipe);

// add new recipe
router.post("/new", recipeControllers.addRecipe);

// edit recipe
router.put("/edit/:id", recipeControllers.editRecipe);

// delete recipe
router.delete("/:id", recipeControllers.deleteRecipe);

module.exports = router;
