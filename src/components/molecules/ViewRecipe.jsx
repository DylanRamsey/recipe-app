import React from 'react';
import Button from "../atoms/Button";
import { ModalTitleContext } from '../organism/Recipes';

function ViewRecipe({setViewRecipeModal}) {

  const {modalRecipeTitle, setModalRecipeTitle} = React.useContext(ModalTitleContext);
  function closeModal() {
    setViewRecipeModal(false);
    console.log('the view recipe modal will now close')
  }

  return (
    <div>
      <h2 className="text-2xl leading-tight mb-3">{modalRecipeTitle}</h2>
      <h3 className="text-xl leading-tight mb-3">Recipe Description</h3>
      <h3 className="text-xl">Ingredients</h3>
      <ul className="mb-3 list-disc ml-4">
        Ingredient 1, ingredient 2, ingredient 3
      </ul>
      <h3 className="text-xl">Steps</h3>
      <ul className="mb-8 ml-4 list-decimal">
        Step 1, Step 2, Step 3
      </ul>
      <div className="flex justify-center gap-x-4 mb-4">
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