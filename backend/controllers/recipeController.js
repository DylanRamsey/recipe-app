const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');
// @desc GET recipes
// @route GET /api/recipes
const getRecipes = asyncHandler(async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.status(200).json(recipes)
  }
  catch (err) {
    console.error(err);
  }
})

// @desc SET recipes
// @route POST /api/recipes
const setRecipe = asyncHandler(async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    console.log(savedRecipe); // Add this line
    res.json(savedRecipe);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// @desc Update recipes
// @route PUT /api/recipes/:id

const updateRecipe = asyncHandler(async (req, res) => {
  try {
    const recipeRecord = await Recipe.findById(req.params.id)
    if(!recipeRecord) {
      res.status(400)
      throw new Error('Recipe not found')
    }
    
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    res.status(200).json(updatedRecipe)
  } catch (err) {
    console.error(err);
  }
})

// @desc Delete recipes
// @route DELETE /api/recipes/:id
const deleteRecipe = asyncHandler(async (req, res) => {
  try {
    const recipeToDelete = await Recipe.findById(req.params.id)
    if(!recipeToDelete) {
      res.status(400)
      throw new Error('Recipe not found')
    }
    await recipeToDelete.deleteOne()
    res.status(200).json({ id: req.params.id })
  } catch (err) {
    console.error(err);
  }
})

module.exports = {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe
}