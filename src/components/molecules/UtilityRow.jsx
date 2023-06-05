import { useState } from 'react'
import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown';
import Modal from '../organism/Modal';
function UtilityRow({recipes, setRecipes, selectedCategory, setSelectedCategory, isLoggedIn, setIsLoggedIn}) {
  const [addRecipeModal, setAddRecipeModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  function addRecipe() {
    setAddRecipeModal(state=>!state);
  }

  function login() {
    setLoginModal(state=>!state);
    console.log(loginModal);
  }

  function logout() {

  }

  return (
    <>
      <div className="sm:flex justify-between w-[32rem] mx-auto mb-8">
      {isLoggedIn === false && 
        <Button 
          buttonText="Login"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={login}
        />
      }
      {isLoggedIn === true && 
        <Button 
          buttonText="Log Out"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={logout}
        />
      }      
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
      {addRecipeModal === true && 
        <Modal 
          modalType="addRecipe" 
          setAddRecipeModal={setAddRecipeModal}
          recipes={recipes}
          setRecipes={setRecipes}
        />
      }
      {loginModal === true &&      
        <Modal  
          modalType="login"
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          loginModal={loginModal}
          setLoginModal={setLoginModal}
        />
      }
    </>
  )
}

export default UtilityRow;