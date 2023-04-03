import Button from "../atoms/Button"

function ViewRecipe({afterSetModalRecipeTitle, viewRecipeModal, setViewRecipeModal}) {

  function closeModal() {
    setViewRecipeModal(false);
  }

  return (
    <div>
      <h2 class="text-2xl leading-tight">{afterSetModalRecipeTitle}</h2>
      <div className="flex gap-x-4">
        <Button 
          buttonText="edit"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick="nothing yet"
        />
        <Button 
          buttonText="close" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
          buttonClick={closeModal}
        />
      </div>
    </div>
  )
}

export default ViewRecipe