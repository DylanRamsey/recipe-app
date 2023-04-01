import RecipeCard from "../molecules/RecipeCard"
import Modal from "./Modal"
function Recipes() {
  return (
    <div className="grid grid-cols-3 justify-items-center">
      <RecipeCard
        recipeTitle="Alfredo Sauce"
        recipeDescription="Makes 4-6 large portions"
      />
      <RecipeCard
        recipeTitle="Alfredo Sauce"
        recipeDescription="Makes 4-6 large portions"
      />
      <RecipeCard
        recipeTitle="Alfredo Sauce"
        recipeDescription="Makes 4-6 large portions"
      />        
      {/*<Modal modalType="addRecipe" /> */}
    </div>
  )
}

export default Recipes