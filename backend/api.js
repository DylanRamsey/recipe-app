const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/api/recipes', (req, res) => {
  const recipes = [
    {
      "id": "1",
      "name": "Alfredo Sauce",
      "description": "Makes 4-6 Portions",
      "category": "Italian",
      "ingredients": [
        "1 cup Freshly grated Parmesean",
        "1 pint heavy whipping cream",
        "4 oz butter",
        "4 oz cream cheese",
        "Pepper to taste, but NO SALT"
      ],
      "steps": [
        "Melt butter and cream cheese over medium heat in a sauce pan, stir frequently until fully melted and homogeneous.",
        "Add heavy cream slowly while whisking. Once hot, DO NOT BOIL, add parmesean a little at a time while whisking constantly.",
        "Reduce heat to low. Stir often. Fridge leftovers."
      ]
    },
    {
      "id": "2",
      "name": "Oven Baked Chicken Wings",
      "description": "Super good chicken wings with fried taste, without the deep frying. Makes about 12 wings",
      "category": "American",
      "ingredients": [
        "1/2 cup of flour",
        "1 teaspoon salt",
        "2 teaspoons chili pepper",
        "1 teaspoon garlic powder",
        "1/2 teaspoon pepper",
        "2 tablespoons baking powder"
      ],
      "steps": [
        "Preheat oven to 450 degrees Fahrenheit",
        "Mix together dry ingredients",
        "Line baking sheet with foil, spray with cooking spray",
        "Rinse raw chicken wings under running water, coat fully with dry mix. Place on sheet",
        "Place all coated wings in over for 20 minutes, then flip wings and cook for another 10",
        "Take wings out and coat right away with your favorite sauce in a mix bowl. Sweet Baby Rays Buffalo recommended"
      ]
    },
    {
      "id": "3",
      "name": "Pan Fried Salmon",
      "description": "Healthy and tasty fish dinner",
      "category": "Fish",
      "ingredients": [
        "Salmon Fillet",
        "Salt",
        "Pepper",
        "Garlic Salt",
        "Olive Oil"
      ],
      "steps": [
        "Warm skillet completely at about medium heat, if oil starts bubbling too much turn heat down a tad",
        "Season Salmon Fillet lightly with seasonings",
        "Oil pan with about 1 tablespoon of Olive oil, spread it around the pan, and place fillet in pan",
        "Cook for 4 minutes each side",
        "Pair with some rice/quinoa and something like green beans"
      ]
    },
    {
      "id": "4",
      "name": "Pan Burgers",
      "description": "Juicy burgers cooked from the pan",
      "category": "American",
      "ingredients": [
        "Fresh ground beef",
        "Salt",
        "Pepper"
      ],
      "steps": [
        "Pan mediumn heat, cast iron perferred",
        "Cook for 4 minutes each side",
        "Temp burger to liking, don't do under 150 degree F",
        "Throw on favorite cheese",
        "Use a good bun like Martins or home made"
      ]
    }    
  ];
  res.json(recipes);
});



app.listen(3001, () => {
  console.log('Server running on port 3001');
});
