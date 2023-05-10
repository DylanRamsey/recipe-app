const express = require('express');
const router = express.Router();
const { getRecipes, setRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController')

router.get('/', getRecipes);

router.post('/', setRecipe)

router.put('/:id', updateRecipe)

router.delete('/:id', deleteRecipe)

module.exports = router;
