function RecipeCard({recipeTitle, recipeDescription}) {
  return (
    <div className="w-[21.875rem] h-[18.75rem] px-8 py-6 bg-cream rounded-lg drop-shadow-card max-w-full">
      <div>{recipeTitle}</div>
      <div>{recipeDescription}</div>
    </div>
  )
}

export default RecipeCard