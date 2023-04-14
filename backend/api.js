const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

let recipes = [];

try {
  const recipesData = fs.readFileSync('./db/recipes.json', 'utf8');
  recipes = JSON.parse(recipesData).recipes;
} catch (err) {
  console.error(err);
}

app.get('/api/recipes', (req, res, ) => {
  const recipes = JSON.parse(fs.readFileSync('./db/recipes.json'));
  res.json(recipes);
});

app.post('/api/recipes', (req, res) => {
  const newRecipe = req.body;
  // generate a unique id for the new recipe using uuidv4
  const { v4: uuidv4 } = require('uuid');
  newRecipe.id = uuidv4();
  // add the new recipe to the existing recipes array
  recipes.push(newRecipe);
  // write the updated array of recipes to the recipes.json file
  fs.writeFile('./db/recipes.json', JSON.stringify({ recipes }), (err) => {
    if (err) throw err;
    // respond with the newly added recipe and a 201 status code
    res.status(201).json(newRecipe);
  });
});

app.delete('/api/recipes/:id', (req, res) => {
  const id = req.params.id;
  const index = recipes.findIndex((recipe) => recipe.id === id);

  if (index !== -1) {
    recipes.splice(index, 1);
    fs.writeFile('./db/recipes.json', JSON.stringify({ recipes }), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error deleting recipe');
      } else {
        res.send('Recipe deleted');
      }
    });
  } else {
    res.status(404).send('Recipe not found');
  }
});
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
