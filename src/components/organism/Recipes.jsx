import RecipeCard from "../molecules/RecipeCard"
import { useState } from "react";
import Modal from "./Modal"
function Recipes({recipes, selectedCategory, setRecipes}) {
  const [viewRecipeModal, setViewRecipeModal] = useState(false);
  const [removeRecipeModal, setRemoveRecipeModal] = useState(false);
  const [modalRecipeID, setModalRecipeID] = useState('');
  const afterSetModalRecipeID = modalRecipeID;
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
      {recipes.map((recipe) => {
        if(recipe.category == selectedCategory || selectedCategory == 'All')
        return <RecipeCard
          recipeID={recipe.id}
          recipeTitle={recipe.name}
          recipeDescription={recipe.description}
          recipeIngreds={recipe.ingredients}
          recipeSteps={recipe.steps}
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
          removeRecipeModal={removeRecipeModal}
          setRemoveRecipeModal={setRemoveRecipeModal}
          setModalRecipeID={setModalRecipeID}
          setModalRecipeTitle={setModalRecipeTitle}
          setModalRecipeDesc={setModalRecipeDesc}
          setModalRecipeIngreds={setModalRecipeIngreds}
          setModalRecipeSteps={setModalRecipeSteps}
        />
      })}
      { viewRecipeModal == true && 
        <Modal 
          modalType="viewRecipe" 
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
          afterSetModalRecipeTitle={afterSetModalRecipeTitle}
          afterSetModalRecipeDesc={afterSetModalRecipeDesc}
          afterSetModalRecipeIngreds={afterSetModalRecipeIngreds}
          afterSetModalRecipeSteps={afterSetModalRecipeSteps}
        /> 
      }

      { removeRecipeModal == true && 
        <Modal
          modalType="removeRecipe"
          setRemoveRecipeModal={setRemoveRecipeModal}
          afterSetModalRecipeID={afterSetModalRecipeID}
          setRecipes={setRecipes}
        /> 
      }
    </div>
  )
}

export default Recipes