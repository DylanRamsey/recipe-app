import Button from "../atoms/Button"

function AddRecipe() {
  return (
    <div>
      <h2 className="text-2xl">Add a new recipe</h2>
      <form action=""></form>
      <label class="text-xl" for="recipeName">Recipe Name</label>
      <input class="block drop-shadow-default w-full mt-2 mb-4 pb-4" type="text" id="recipeName" name="recipeName" />
      <label class="text-xl" for="description">Description</label>
      <textarea class="block drop-shadow-default w-full mt-2 mb-4" type="text" id="description" name="description" />
      <label class="text-xl" for="ingredients">Ingredients (Add each one separately)</label>
      <input class="block drop-shadow-default w-full mt-2 mb-4 pb-4" type="text" id="ingredients" name="ingredients" />
      <span className="block mb-4">
        <Button 
          buttonText="add ingredient"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
        />
      </span>
      <label class="text-xl" for="steps">Steps (Add each one separately)</label>
      <input class="block drop-shadow-default w-full mt-2 mb-4 pb-4" type="text" id="steps" name="steps" />
      <span className="block mb-4">
        <Button
          buttonText="add ingredient"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
        />
      </span>
      <div className="flex justify-center gap-x-4 mt-12">
        <Button 
          buttonText="view more"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
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

export default AddRecipe