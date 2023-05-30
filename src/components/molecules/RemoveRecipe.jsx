import React from 'react';
import Button from "../atoms/Button";
import { ModalDataContext } from '../organism/Recipes';
function RemoveRecipe({recipes, setRecipes, setRemoveRecipeModal}) {
  const {modalRecipeData} = React.useContext(ModalDataContext);
  const recipeID = modalRecipeData.id;
  function closeModal() {
    setRemoveRecipeModal(false)
  }

  const removeRecipeConfirmed = (id) => {
    fetch(`http://localhost:3002/api/recipes/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete recipe');
        }
        const idAsString = id.toString();
        const updatedRecipes = recipes.filter(recipe => recipe._id !== idAsString);
        setRecipes(updatedRecipes);
        closeModal();
      })
      .catch(error => {
        console.error(error);
      });    
  }

  return (
    <>
      <h3 className="text-2xl text-center mb-3 font-bold">WARNING</h3>
      <div className="text-xl">
        <p className="mb-3">You are about to permanently delete this recipe, once a recipe has been removed you will not be able to restore the recipe.</p>
        <p className="mb-3">If you wish to continue and delete the recipe, click “DELETE” below.</p>
        <p className="mb-3">If you wish to cancel, click “CANCEL”.</p>
      </div>
      <div className="flex justify-center gap-x-4 mt-12">
        <button 
          className={`uppercase font-bold w-max px-4 py-2 rounded-md drop-shadow-btn bg-retro-red hover:bg-retro-red-hov text-white`}
          onClick={() => removeRecipeConfirmed(recipeID)}
        >
          delete
        </button>        
        <Button 
          buttonText="cancel"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={closeModal}
        />
      </div>    
    </>
  )
}

export default RemoveRecipe