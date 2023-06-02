import { useEffect } from 'react';

import Button from "../atoms/Button"
import EditIcon from "../icons/EditIcon"
function RecipeCard({
      recipeID,
      modalRecipeID,
      setModalRecipeID,
      recipeTitle, 
      recipeDescription,
      recipeIngreds,
      recipeSteps,
      recipeCategory,
      setViewRecipeModal,
      setRemoveRecipeModal,
      setEditRecipeModal,
      modalRecipeData,
      setModalRecipeData
    }) 
  {

  function setModalData(){
    setModalRecipeData({
      id: `${recipeID}`,
      title: `${recipeTitle}`,
      description: `${recipeDescription}`,
      steps: `${recipeSteps}`,
      ingredients: `${recipeIngreds}`,
      category: `${recipeCategory}`
    });
  }

  function viewRecipe() {
    setViewRecipeModal(state=>!state);
    setModalData();
  }

  function removeRecipe() {
    setRemoveRecipeModal(state=>!state);
    setModalData();
  }

  function editRecipe() {
    console.log("I've been clicked");
    setEditRecipeModal(state=>!state);
    setModalData();
  }

  return (
    <div className={`w-[21.875rem] md:w-full  px-6 py-4 xl:px-8 xl:py-6 bg-cream rounded-lg drop-shadow-default max-w-full flex flex-col justify-between`}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl leading-none mb-2">{recipeTitle}</h2>
          <h3 className="text-lg mb-4 leading-tight">{recipeDescription}</h3>
        </div>
        <span 
          className="cursor-pointer shrink-0" 
          onClick={editRecipe}>
          <EditIcon/>
        </span>
      </div>
      <div className="flex gap-x-4">
        <Button 
          buttonText="view more"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={viewRecipe}
        />
        <Button 
          buttonText="remove" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
          buttonClick={removeRecipe}
        />
      </div>
    </div>
  )
}

export default RecipeCard