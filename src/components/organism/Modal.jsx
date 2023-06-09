import AddRecipe from "../molecules/AddRecipe"
import ViewRecipe from "../molecules/ViewRecipe"
import RemoveRecipe from "../molecules/RemoveRecipe"
import EditRecipe from "../molecules/EditRecipe"
import Login from "../molecules/Login"
import NotLoggedIn from "../molecules/NotLoggedIn"
import closeIcon from "../../assets/icons/modal-close.svg"
function Modal({
  modalType,
  viewRecipeModal,
  setViewRecipeModal,
  setRemoveRecipeModal,
  recipes,
  setRecipes,
  setAddRecipeModal,
  editRecipeModal,
  setEditRecipeModal,
  loginModal,
  setLoginModal,
  setIsLoggedIn,
  notLoggedInModal,
  setNotLoggedInModal,
  isLoggedIn
}){

  function closeModal() {
    if(modalType === 'viewRecipe'){
      setViewRecipeModal(false)
    }

    if(modalType === 'removeRecipe'){
      setRemoveRecipeModal(false)
    }

    if(modalType === 'addRecipe'){
      setAddRecipeModal(false)
    }

    if(modalType === 'editRecipe'){
      setEditRecipeModal(false)
    }

    if(modalType === 'editRecipe'){
      setEditRecipeModal(false)
    }

    if(modalType === 'login'){
      setLoginModal(false)
    }

    if(modalType === 'notLoggedIn'){
      setNotLoggedInModal(false)
    }    

  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div 
            className="absolute -right-6 -top-4 cursor-pointer"
            onClick={closeModal}
          >
            <img 
              src={closeIcon} 
              alt="Close icon"
            />
          </div>
            <div className="bg-cream rounded-lg px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  {modalType === 'addRecipe' &&
                    <AddRecipe
                      setAddRecipeModal={setAddRecipeModal}
                      setRecipes={setRecipes}
                      recipes={recipes}
                      isLoggedIn={isLoggedIn}
                    />
                  }
                  {modalType === 'viewRecipe' &&
                    <ViewRecipe
                      viewRecipeModal={viewRecipeModal}
                      setViewRecipeModal={setViewRecipeModal}
                    />
                  }
                  {modalType === 'removeRecipe' && 
                    <RemoveRecipe
                      setRemoveRecipeModal={setRemoveRecipeModal}
                      recipes={recipes}
                      setRecipes={setRecipes}
                    />
                  }
                  {modalType === 'editRecipe' && 
                    <EditRecipe
                      editRecipeModal={editRecipeModal}
                      setEditRecipeModal={setEditRecipeModal}     
                      recipes={recipes}
                      setRecipes={setRecipes}                                                 
                    />
                  }
                  {modalType === 'login' && 
                    <Login 
                      loginModal={loginModal}
                      setLoginModal={setLoginModal}
                      setIsLoggedIn={setIsLoggedIn}         
                    />
                  }
                  {modalType === 'notLoggedIn' && 
                    <NotLoggedIn 
                      setNotLoggedInModal={setNotLoggedInModal}
                      setLoginModal={setLoginModal}
                    />
                  }                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal