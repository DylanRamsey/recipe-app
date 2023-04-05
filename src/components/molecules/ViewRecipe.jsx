import Button from "../atoms/Button"

function ViewRecipe({afterSetModalRecipeTitle, setViewRecipeModal, afterSetModalRecipeDesc, afterSetModalRecipeIngreds}) {

  function closeModal() {
    setViewRecipeModal(false);
  }

  return (
    <div>
      <h2 className="text-2xl leading-tight">{afterSetModalRecipeTitle}</h2>
      <h3 className="text-lg leading-tight">{afterSetModalRecipeDesc}</h3>
      <ul>
        
          {afterSetModalRecipeIngreds.forEach((ingredient) => {
              console.log(ingredient)
          })}          
      </ul>
      <p></p>

      <h3 className="text-xl">Ingredients</h3>
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