import RecipeCard from "../molecules/RecipeCard"
import { useState } from "react";
import Modal from "./Modal"
function Recipes({data, selectedCategory}) {
  const [viewRecipeModal, setViewRecipeModal] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState('');
  const afterSetModalRecipeTitle = modalRecipeTitle;
  const [modalRecipeDesc, setModalRecipeDesc] = useState('');
  const afterSetModalRecipeDesc = modalRecipeDesc;
  const [modalRecipeIngreds, setModalRecipeIngreds] = useState('');
  const afterSetModalRecipeIngreds = modalRecipeIngreds;
  const [modalRecipeSteps, setModalRecipeSteps] = useState('');
  const afterSetModalRecipeSteps = modalRecipeSteps;

  return (
    <div className="grid grid-cols-4 justify-items-center">
      {data.map((recipe) => {
        if(recipe.category == selectedCategory || selectedCategory == 'All')
        return <RecipeCard
          key={recipe.id}
          recipeTitle={recipe.name}
          recipeDescription={recipe.description}
          recipeIngreds={recipe.ingredients}
          recipeSteps={recipe.steps}
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
          setModalRecipeTitle={setModalRecipeTitle}
          setModalRecipeDesc={setModalRecipeDesc}
          setModalRecipeIngreds={setModalRecipeIngreds}
          setModalRecipeSteps={setModalRecipeSteps}
        />
      })}
      { viewRecipeModal == true && 
        <Modal 
          modalType="viewRecipe" 
          afterSetModalRecipeTitle={afterSetModalRecipeTitle}
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
          afterSetModalRecipeDesc={afterSetModalRecipeDesc}
          afterSetModalRecipeIngreds={afterSetModalRecipeIngreds}
          afterSetModalRecipeSteps={afterSetModalRecipeSteps}
        /> 
      }
    </div>
  )
}

export default Recipes