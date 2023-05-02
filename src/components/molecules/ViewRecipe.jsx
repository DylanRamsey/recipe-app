import Button from "../atoms/Button"
import EditRecipe from "./EditRecipe";
function ViewRecipe({afterSetModalRecipeTitle, setViewRecipeModal, afterSetModalRecipeDesc, afterSetModalRecipeIngreds, afterSetModalRecipeSteps, setEditRecipeModal}) {

  function closeModal() {
    setViewRecipeModal(false);
  }

  function editRecipe() {
    closeModal();
    setEditRecipeModal(state=>!state);
  }

  return (
    <div>
      <h2 className="text-2xl leading-tight mb-3">{afterSetModalRecipeTitle}</h2>
      <h3 className="text-xl leading-tight mb-3">{afterSetModalRecipeDesc}</h3>
      <h3 className="text-xl">Ingredients</h3>
      <ul className="mb-3 list-disc ml-4">
        {afterSetModalRecipeIngreds.map((ingredient, index) => 
          <li key={index}>{ingredient}</li>
        )}          
      </ul>
      <h3 className="text-xl">Steps</h3>
      <ul className="mb-8 ml-4 list-decimal">
        {afterSetModalRecipeSteps.map((step, index) => 
          <li key={index}>{step}</li>
        )}       
      </ul>
      <div className="flex justify-center gap-x-4 mb-4">
        <Button 
          buttonText="edit"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={editRecipe}
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