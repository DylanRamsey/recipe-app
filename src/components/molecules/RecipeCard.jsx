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
      setViewRecipeModal,
      setRemoveRecipeModal,
      setEditRecipeModal,
      modalRecipeData,
      setModalRecipeData
    }) 
  {

  function viewRecipe() {
    setViewRecipeModal(state=>!state);
    setModalRecipeData({
      title: `${recipeTitle}`,
      description: `${recipeDescription}`,
      steps: `${recipeSteps}`,
      ingredients: `${recipeIngreds}`
    });
  }

  function removeRecipe() {
    setModalRecipeID(recipeID);
    setRemoveRecipeModal(state=>!state);
  }

  return (
    <div className={`w-[21.875rem] px-8 py-6 bg-cream rounded-lg drop-shadow-default max-w-full mt-10 flex flex-col justify-between`}>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl leading-none mb-2">{recipeTitle}</h2>
          <h3 className="text-lg mb-4 leading-tight">{recipeDescription}</h3>
        </div>
        <EditIcon 
          setEditRecipeModal={setEditRecipeModal}
          recipeID={recipeID}
          modalRecipeID={modalRecipeID}
          setModalRecipeID={setModalRecipeID}
        />
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