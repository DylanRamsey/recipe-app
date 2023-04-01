import RecipeCard from "../molecules/RecipeCard"
import Modal from "./Modal"
function Recipes({data}) {
  return (
    <div className="grid grid-cols-3 justify-items-center">
      {data.map((recipe) => (      
        <RecipeCard
          recipeTitle={recipe.name}
          recipeDescription={recipe.description}
        />
      ))}
      {/*<Modal modalType="addRecipe" /> */}
    </div>
  )
}

export default Recipes