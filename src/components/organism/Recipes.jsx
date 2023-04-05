import RecipeCard from "../molecules/RecipeCard"
import { useState } from "react";
import Modal from "./Modal"
function Recipes({data}) {
  const [viewRecipeModal, setViewRecipeModal] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState('');
  const afterSetModalRecipeTitle = modalRecipeTitle;
  const [modalRecipeDesc, setModalRecipeDesc] = useState('');
  const afterSetModalRecipeDesc = modalRecipeDesc;
  const [modalRecipeIngreds, setModalRecipeIngreds] = useState('');
  const afterSetModalRecipeIngreds = modalRecipeIngreds;

  return (
    <div className="grid grid-cols-3 justify-items-center">
      {data.map((recipe) => (      
        <RecipeCard
          key={recipe.id}
          recipeTitle={recipe.name}
          recipeDescription={recipe.description}
          recipeIngreds={recipe.ingredients}
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
          setModalRecipeTitle={setModalRecipeTitle}
          setModalRecipeDesc={setModalRecipeDesc}
          setModalRecipeIngreds={setModalRecipeIngreds}
        />
      ))}
      { viewRecipeModal == true && 
        <Modal 
          modalType="viewRecipe" 
          afterSetModalRecipeTitle={afterSetModalRecipeTitle}
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
          afterSetModalRecipeDesc={afterSetModalRecipeDesc}
          afterSetModalRecipeIngreds={afterSetModalRecipeIngreds}
        /> 
      }
    </div>
  )
}

export default Recipes