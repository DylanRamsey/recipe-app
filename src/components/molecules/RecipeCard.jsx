import Button from "../atoms/Button"

function RecipeCard({recipeTitle, recipeDescription}) {
  return (
    <div className="w-[21.875rem] px-8 py-6 bg-cream rounded-lg drop-shadow-default max-w-full mt-10 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl leading-tight	">{recipeTitle}</h2>
        <h3 className="text-lg mb-4 leading-tight	">{recipeDescription}</h3>
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