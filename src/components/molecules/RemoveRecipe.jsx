import Button from "../atoms/Button"

function RemoveRecipe({setRemoveRecipeModal, afterSetModalRecipeTitle}) {

  function closeModal() {
    setRemoveRecipeModal(false)
  }

  function removeRecipeConfirmed() {
    console.log("byeeeeeee")
  }

  return (
    <>
      <h3 className="text-2xl text-center mb-3">WARNING</h3>
      <div className="text-xl">
        <p className="mb-3">You are about to permanently delete this recipe, once a recipe has been removed you will not be able to restore the recipe.</p>
        <p className="mb-3">If you wish to continue and delete the recipe, click “DELETE” below.</p>
        <p className="mb-3">If you wish to cancel, click “CANCEL”.</p>
      </div>
      <div className="flex justify-center gap-x-4 mt-12">
        <Button 
          buttonText="delete" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
          buttonClick={removeRecipeConfirmed}
        />        
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