const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const DB_PATH = './db/recipes.json';

const getDbData = () => {
  try {
    const data = fs.readFileSync(DB_PATH);
    return JSON.parse(data);
  } catch (err) {
    // If the file doesn't exist or is empty, return an empty object
    return {};
  }
};

const writeDbData = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data));
};

app.get('/api/recipes', (req, res, ) => {
  const recipes = JSON.parse(fs.readFileSync('./db/recipes.json'));
  res.json(recipes);
});

app.delete('/api/recipes/:id', (req, res) => {
  const id = req.params.id;
  const recipes = JSON.parse(fs.readFileSync('./db/recipes.json', 'utf8'));
  const index = recipes.recipes.findIndex(recipe => recipe.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  recipes.recipes.splice(index, 1);
  fs.writeFileSync('./db/recipes.json', JSON.stringify(recipes));
  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
