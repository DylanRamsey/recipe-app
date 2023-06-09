import React from 'react';
import RecipeCard from "../molecules/RecipeCard"
import { useState } from "react";
import Modal from "./Modal"

export const ModalDataContext = React.createContext();

function Recipes({recipes, selectedCategory, setRecipes, isLoggedIn, setIsLoggedIn, notLoggedInModal, setNotLoggedInModal}) {

  /* Modal open and close state. THIS SHOULD BE GOOD TO KEEP. JUST THE STATE OF THE MODALS OPENING AND CLOSING, DOES NOT HANDLE RECIPE STATE  */
  const [viewRecipeModal, setViewRecipeModal] = useState(false);
  const [removeRecipeModal, setRemoveRecipeModal] = useState(false);
  const [editRecipeModal, setEditRecipeModal] = useState(false);

  /****************************************/

  /* Setting the state for the modal data */
  const [modalRecipeData, setModalRecipeData] = useState({});

  // This is for making this state and setState available to any components using ModalTitleContext
  const value = {
    modalRecipeData, setModalRecipeData
  }
  /****************************************/

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center">
      <ModalDataContext.Provider value={value} >
        {recipes.map((recipe) => {
          if(recipe.category == selectedCategory || selectedCategory == 'All')
          return <RecipeCard
              key={recipe._id}
              recipeID={recipe._id}
              recipeTitle={recipe.name}
              recipeDescription={recipe.description}
              recipeIngreds={recipe.ingredients}
              recipeCategory={recipe.category}
              recipeSteps={recipe.steps}
              viewRecipeModal={viewRecipeModal}
              setViewRecipeModal={setViewRecipeModal}
              modalRecipeData={modalRecipeData}
              setModalRecipeData={setModalRecipeData}
              setRemoveRecipeModal={setRemoveRecipeModal}
              setEditRecipeModal={setEditRecipeModal}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              notLoggedInModal={notLoggedInModal}
              setNotLoggedInModal={setNotLoggedInModal}
            />
          })}
        { viewRecipeModal == true && 
          <Modal 
            modalType="viewRecipe" 
            setViewRecipeModal={setViewRecipeModal}
          /> 
        }

        { removeRecipeModal == true && 
          <Modal
            modalType="removeRecipe"
            setRemoveRecipeModal={setRemoveRecipeModal}
            recipes={recipes}
            setRecipes={setRecipes}
          /> 
        }

        { editRecipeModal == true && 
          <Modal
            modalType="editRecipe"
            recipes={recipes}
            setRecipes={setRecipes}
            editRecipeModal={editRecipeModal}
            setEditRecipeModal={setEditRecipeModal}
          />     
        }

        { notLoggedInModal == true && 
          <Modal
            modalType="notLoggedIn"
            notLoggedInModal={notLoggedInModal}
            setNotLoggedInModal={setNotLoggedInModal}
          />     
        }        
      </ModalDataContext.Provider>
    </div>
  )
}

export default Recipes