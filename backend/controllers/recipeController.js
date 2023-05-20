const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');
// @desc GET recipes
// @route GET /api/recipes
const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find()
  res.status(200).json(recipes)
})

// @desc SET recipes
// @route POST /api/recipes
const setRecipe = asyncHandler(async (req, res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error('Name is required')
  }

  const recipe = await Recipe.create({
    name: req.body.name,
    description: req.body.description,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    category: req.body.category
  })
  res.status(200).json(recipe)
})

// @desc Update recipes
// @route PUT /api/recipes/:id

const updateRecipe = asyncHandler(async (req, res) => {
  const recipeRecord = await Recipe.findById(req.params.id)
  if(!recipeRecord) {
    res.status(400)
    throw new Error('Recipe not found')
  }
  
  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedRecipe)
})

// @desc Delete recipes
// @route DELETE /api/recipes/:id
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipeToDelete = await Recipe.findById(req.params.id)
  if(!recipeToDelete) {
    res.status(400)
    throw new Error('Recipe not found')
  }

  await recipeToDelete.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe
}