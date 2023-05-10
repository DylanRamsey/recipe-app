
// @desc GET goals
// @route GET /api/goals
const getRecipes = (req, res) => {
  res.status(200).json({ message: 'Get Recipes'})
}

// @desc SET goals
// @route POST /api/goals
const setRecipe = (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Text is required')
  }
  res.status(200).json({ message: 'Set Recipe'})
}

// @desc Update goals
// @route PUT /api/goals/:id
const updateRecipe = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}`})
}

// @desc Delete goals
// @route DELETE /api/goals/:id
const deleteRecipe = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}`})
}

module.exports = {
  getRecipes,
  setRecipe,
  updateRecipe,
  deleteRecipe
}