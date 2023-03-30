import RecipeCard from "../molecules/RecipeCard"

function Recipes() {
  return (
    <div className="grid grid-cols-3">
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
    </div>
  )
}

export default Recipes