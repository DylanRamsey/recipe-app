import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import "/Users/dylanramsey/Sites/rt-recipes/src/assets/sass/main.scss"
import AppTitle from './components/atoms/AppTitle'
import UtilityRow from './components/molecules/UtilityRow'
import Recipes from './components/organism/Recipes'
import Pagination from './components/molecules/Pagination'
export const LoggedInContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("false");
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

  /* This all has to do with Pagination. */
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage, setRecipePerPage] = useState(12);
  const indexOfLastPost = currentPage * recipePerPage;
  const indexOfFirstPost = indexOfLastPost - recipePerPage;
  const currentRecipes = recipes.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  /* End Pagination */

  return (
    <div data-element="app">
      <div data-element="app__wrapper" className="App container mx-auto mt-16">
        <LoggedInContext.Provider value={isLoggedIn}>
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
              setRecipes={setRecipes} 
            />
            <Pagination 
              recipePerPage={recipePerPage} 
              totalRecipes={recipes.length} 
              paginate={paginate} 
            />
        </LoggedInContext.Provider>
      </div>
    </div>
  )
}
export default App