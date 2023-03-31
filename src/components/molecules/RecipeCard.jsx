import Button from "../atoms/Button"

function RecipeCard({recipeTitle, recipeDescription}) {
  return (
    <div className="w-[21.875rem] h-[18.75rem] px-8 py-6 bg-cream rounded-lg drop-shadow-card max-w-full mt-10 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl">{recipeTitle}</h2>
        <h3 className="text-xl">{recipeDescription}</h3>
      </div>
      <div className="flex gap-x-4">
        <Button 
          buttonText="view more"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
        />
        <Button 
          buttonText="remove" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
        />
      </div>
    </div>
  )
}

export default RecipeCard