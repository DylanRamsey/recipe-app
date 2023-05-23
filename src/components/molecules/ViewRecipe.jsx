import React from 'react';
import Button from "../atoms/Button";
import { ModalDataContext } from '../organism/Recipes';

function ViewRecipe({setViewRecipeModal}) {
  const {modalRecipeData} = React.useContext(ModalDataContext);
  function closeModal() {
    setViewRecipeModal(false);
  }

  return (
    <div>
      <h2 className="text-2xl leading-tight mb-3">{modalRecipeData.title}</h2>
      <h3 className="text-xl leading-tight mb-3">{modalRecipeData.description}</h3>
      <h3 className="text-xl">Ingredients</h3>
      <ul className="mb-3 list-disc ml-4">
        {modalRecipeData.ingredients}
      </ul>
      <h3 className="text-xl">Steps</h3>
      <ul className="mb-8 ml-4 list-decimal">
      {modalRecipeData.steps}
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