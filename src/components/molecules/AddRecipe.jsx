import Button from "../atoms/Button"

function AddRecipe({setAddRecipeModal}) {
  function closeModal() {
    console.log('trying to close the add recipe modal')
    setAddRecipeModal(false)
  }
  return (
    <div>
      <h2 className="text-2xl">Add a new recipe</h2>
      <form action=""></form>
      <label className="text-xl" htmlFor="recipeName">Recipe Name</label>
      <input className="block drop-shadow-default w-full mt-2 mb-4 pb-4" type="text" id="recipeName" name="recipeName" />
      <label className="text-xl" htmlFor="description">Description</label>
      <textarea className="block drop-shadow-default w-full mt-2 mb-4" type="text" id="description" name="description" />
      <label className="text-xl" htmlFor="ingredients">Ingredients (Add each one separately)</label>
      <input className="block drop-shadow-default w-full mt-2 mb-4 pb-4" type="text" id="ingredients" name="ingredients" />
      <span className="block mb-4">
        <Button 
          buttonText="add ingredient"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
        />
      </span>
      <label className="text-xl" htmlFor="steps">Steps (Add each one separately)</label>
      <input className="block drop-shadow-default w-full mt-2 mb-4 pb-4" type="text" id="steps" name="steps" />
      <span className="block mb-4">
        <Button
          buttonText="add ingredient"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
        />
      </span>
      <div className="flex justify-center gap-x-4 mt-12">
        <Button 
          buttonText="submit"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
        />
        <Button 
          buttonText="cancel" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
          buttonClick={closeModal}
        />
      </div>      
    </div>
  )
}

export default AddRecipe