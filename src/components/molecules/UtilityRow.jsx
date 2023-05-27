import { useState } from 'react'
import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown';
import Modal from '../organism/Modal';
function UtilityRow({recipes, setRecipes, selectedCategory, setSelectedCategory}) {
  const [addRecipeModal, setAddRecipeModal] = useState(false);

  function addRecipe() {
    setAddRecipeModal(state=>!state);
  }

  return (
    <>
      <div className="flex justify-between w-[26rem] mx-auto">
        <Button 
          buttonText="add recipe"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={addRecipe}
        />
        <Dropdown
          recipes={recipes}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      {addRecipeModal == true && 
        <Modal 
          modalType="addRecipe" 
          setAddRecipeModal={setAddRecipeModal}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      }
    </>
  )
}

export default UtilityRow;