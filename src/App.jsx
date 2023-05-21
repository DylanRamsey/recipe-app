import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import "/Users/dylanramsey/Sites/rt-recipes/src/assets/sass/main.scss"
import AppTitle from './components/atoms/AppTitle'
import UtilityRow from './components/molecules/UtilityRow'
import Recipes from './components/organism/Recipes'
import Pagination from './components/molecules/Pagination'

export const RecipeContext = React.createContext();

{/*
Todo -
Try to see about coming up with seting up all the modal data in a single object. Something like,
const [modalRecipeData, setModalRecipeData] = useState({});

Then use context to pass this dat direct to ViewRecipe,EditRecipe,DeleteRecipe, etc 

*/}


function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    fetch('http://localhost:3002/api/recipes')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setRecipes(data)
      })
      .catch(error => console.error(error));
  }, []);

  /* This all has to do with Pagination. Bug with Pagination right now. Only works after first time trying. Rewatch brads video? */
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(12);
  const indexOfLastPost = currentPage * recipePerPage;
  const indexOfFirstPost = indexOfLastPost - recipePerPage;
  const currentRecipes = recipes.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  /* End Pagination */

  return (
    <div data-element="app">
      <div data-element="app__wrapper" className="App container mx-auto mt-16">
        <RecipeContext.Provider value={recipes}>
          <AppTitle />
          <UtilityRow 
            recipes={recipes} 
            setRecipes={setRecipes} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />

          <Recipes 
            recipes={currentRecipes} 
            selectedCategory={selectedCategory} 
            //setRecipes={setRecipes} 
          />

          {/* This works fine leave it alone */}
          <Pagination 
            recipePerPage={recipePerPage} 
            totalRecipes={recipes.length} 
            paginate={paginate} 
          />
        </RecipeContext.Provider>

        {/* This is just a test looping over the recipes received from the backend 
          {recipes.map(recipe => (
            <div>
              <h2>{recipe.name}</h2>
              <p>ID: {recipe._id}</p>
              <p>Description: {recipe.description}</p>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Steps: {recipe.steps}</p>
              <p>Category: {recipe.category}</p>
            </div>
          ))}          
          */}
      </div>
    </div>
  )
}
export default App
