import Button from "../atoms/Button"

function RecipeCard({
      recipeTitle, 
      recipeDescription,
      recipeIngreds,
      recipeSteps,
      viewRecipeModal, 
      setViewRecipeModal, 
      setModalRecipeTitle, 
      setModalRecipeDesc,
      setModalRecipeIngreds,
      setModalRecipeSteps
    }) 
  {

  console.log(viewRecipeModal);
  function viewRecipe(){
    setViewRecipeModal(state=>!state);
    setModalRecipeTitle(recipeTitle);
    setModalRecipeDesc(recipeDescription);
    setModalRecipeIngreds(recipeIngreds);
    setModalRecipeSteps(recipeSteps);
  }

  return (
    <div className="w-[21.875rem] px-8 py-6 bg-cream rounded-lg drop-shadow-default max-w-full mt-10 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl leading-none mb-2">{recipeTitle}</h2>
        <h3 className="text-lg mb-4 leading-tight">{recipeDescription}</h3>
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
        />
      </div>
    </div>
  )
}

export default RecipeCard