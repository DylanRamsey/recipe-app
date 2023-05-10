const asyncHandler = require('express-async-handler')
// @desc GET goals
// @route GET /api/goals
const getRecipes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Recipes'})
})

// @desc SET goals
// @route POST /api/goals
const setRecipe = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Text is required')
  }
  res.status(200).json({ message: 'Set Recipe'})
})

// @desc Update goals
// @route PUT /api/goals/:id
const updateRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}`})
})

// @desc Delete goals
// @route DELETE /api/goals/:id
const deleteRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}`})
})

module.exports = {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe
}