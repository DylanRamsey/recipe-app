import { useState } from 'react'
import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown';
import Modal from '../organism/Modal';
function UtilityRow({recipes, selectedCategory, setSelectedCategory}) {
  const [addRecipeModal, setAddRecipeModal] = useState(false);

  function viewRecipe() {
    setAddRecipeModal(state=>!state);
  }

  return (
    <>
      <div className="flex justify-between w-[26rem] mx-auto">
        <Button 
          buttonText="add recipe"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={viewRecipe}
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
        />
      }
    </>
  )
}

export default UtilityRow;