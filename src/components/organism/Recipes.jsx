import RecipeCard from "../molecules/RecipeCard"
import { useState } from "react";
import Modal from "./Modal"
function Recipes({data}) {
  const [viewRecipeModal, setViewRecipeModal] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState('');

  const afterSetModalRecipeTitle = modalRecipeTitle;
  /*
  Next step, set the state of the current recipe being viewed?
  define current recipe viewed here as state, pass it down to recipe card, and then set that state in recipe card?
  */
    /* create recipe title state */
    /* create recipe Description state */
    /* create recipe Ingredients state*/
    /* create recipe Steps state */
  return (
    <div className="grid grid-cols-3 justify-items-center">
      {data.map((recipe) => (      
        <RecipeCard
          key={recipe.id}
          recipeTitle={recipe.name}
          recipeDescription={recipe.description}
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
          modalRecipeTitle={modalRecipeTitle}
          setModalRecipeTitle={setModalRecipeTitle}
        />
      ))}
      { viewRecipeModal == true && 
        <Modal 
          modalType="viewRecipe" 
          afterSetModalRecipeTitle={afterSetModalRecipeTitle}
        /> 
      }
    </div>
  )
}

export default Recipes