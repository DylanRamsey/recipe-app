import RecipeCard from "../molecules/RecipeCard"
import { useState } from "react";
import Modal from "./Modal"
function Recipes({data}) {
  const [viewRecipeModal, setViewRecipeModal] = useState(false);
  /*
  Next step, set the state of the current recipe being viewed?
  define current recipe viewed here as state, pass it down to recipe card, and then set that state in recipe card?

  */


  return (
    <div className="grid grid-cols-3 justify-items-center">
      {data.map((recipe) => (      
        <RecipeCard
          key={recipe.id}
          recipeTitle={recipe.name}
          recipeDescription={recipe.description}
          viewRecipeModal={viewRecipeModal}
          setViewRecipeModal={setViewRecipeModal}
        />
      ))}
      { viewRecipeModal == true && 
        <Modal modalType="viewRecipe" /> 
      }
    </div>
  )
}

export default Recipes