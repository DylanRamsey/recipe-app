import { useState } from 'react'
import { useEffect } from 'react'
import "/Users/dylanramsey/Sites/rt-recipes/src/assets/sass/main.scss"
import AppTitle from './components/atoms/AppTitle'
import UtilityRow from './components/molecules/UtilityRow'
import Recipes from './components/organism/Recipes'
function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => console.error(error));
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <div data-element="app">
      <div data-element="app__wrapper" className="App container mx-auto mt-16">
        <AppTitle />
        <UtilityRow recipes={recipes} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Recipes recipes={recipes} selectedCategory={selectedCategory} />
      </div>
    </div>
  )
}


export default App
