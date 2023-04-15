import { useState } from 'react'
import { useEffect } from 'react'
import "/Users/dylanramsey/Sites/rt-recipes/src/assets/sass/main.scss"
import AppTitle from './components/atoms/AppTitle'
import UtilityRow from './components/molecules/UtilityRow'
import Recipes from './components/organism/Recipes'
import Pagination from './components/molecules/Pagination'
function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => console.error(error));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(12);
  const indexOfLastPost = currentPage * recipePerPage;
  const indexOfFirstPost = indexOfLastPost - recipePerPage;
  const currentRecipes = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div data-element="app">
      <div data-element="app__wrapper" className="App container mx-auto mt-16">
        <AppTitle />
        <UtilityRow recipes={recipes} setRecipes={setRecipes} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Recipes recipes={currentRecipes} selectedCategory={selectedCategory} setRecipes={setRecipes} />
        <Pagination 
          recipePerPage={recipePerPage} 
          totalRecipes={recipes.length} 
          paginate={paginate} 
        />
      </div>
    </div>
  )
}
export default App
