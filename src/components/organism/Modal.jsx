import AddRecipe from "../molecules/AddRecipe"
import ViewRecipe from "../molecules/ViewRecipe"
import RemoveRecipe from "../molecules/RemoveRecipe"
import closeIcon from "../../assets/icons/modal-close.svg"
function Modal({
  modalType,
  afterSetModalRecipeID,
  afterSetModalRecipeTitle, 
  afterSetModalRecipeDesc, 
  viewRecipeModal, 
  setViewRecipeModal,
  setRemoveRecipeModal,
  afterSetModalRecipeIngreds, 
  afterSetModalRecipeSteps,
  recipes,
  setRecipes
}){

  function closeModal() {
    if(modalType === 'viewRecipe'){
      setViewRecipeModal(false)
    }

    if(modalType === 'removeRecipe'){
      setRemoveRecipeModal(false)
    }
  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                    <AddRecipe />
                  }
                  {modalType === 'viewRecipe' &&
                    <ViewRecipe
                      viewRecipeModal={viewRecipeModal}
                      setViewRecipeModal={setViewRecipeModal}
                      afterSetModalRecipeTitle={afterSetModalRecipeTitle}
                      afterSetModalRecipeDesc={afterSetModalRecipeDesc}
                      afterSetModalRecipeIngreds={afterSetModalRecipeIngreds}
                      afterSetModalRecipeSteps={afterSetModalRecipeSteps}
                    />
                  }
                  {modalType === 'removeRecipe' && 
                    <RemoveRecipe
                      setRemoveRecipeModal={setRemoveRecipeModal}
                      afterSetModalRecipeID={afterSetModalRecipeID}
                      recipes={recipes}
                      setRecipes={setRecipes}
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