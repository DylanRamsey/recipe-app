import Button from "../atoms/Button"
import { useState } from 'react'
function AddRecipe({setAddRecipeModal, recipes, setRecipes, isLoggedIn}) {
  const [addRecipeName, setAddRecipeName] = useState('');
  const [addRecipeDesc, setAddRecipeDesc] = useState('');
  const [addRecipeIngreds, setAddRecipeIngreds] = useState('');
  const [addRecipeSteps, setAddRecipeSteps] = useState('');
  const [addRecipeCategory, setAddRecipeCategory] = useState('');
  function closeModal() {
    setAddRecipeModal(false)
  }

  const submitRecipe = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: addRecipeName,
      description: addRecipeDesc,
      ingredients: addRecipeIngreds,
      steps: addRecipeSteps,
      category: addRecipeCategory,
    };
    console.log('Sending request to server:', newRecipe);
    fetch('http://localhost:3002/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },      
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes([...recipes, data]);
      })
      .catch((err) => console.error(err));    
      closeModal();
  }

  return (
    <div>
      <h2 className="text-2xl">Add a new recipe</h2>
      <form action=""></form>
      <label className="text-xl" htmlFor="recipeName">Recipe Name</label>
      <input 
        className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
        type="text" 
        id="recipeName" 
        name="recipeName"
        value={addRecipeName}
        onChange={(event) => {
          setAddRecipeName(event.target.value);
        }}        
      />
      <label className="text-xl" htmlFor="description">Description</label>
      <textarea 
        className="block drop-shadow-default w-full mt-2 mb-4" 
        type="text" 
        id="description" 
        name="description" 
        value={addRecipeDesc}
        onChange={(event) => {
          setAddRecipeDesc(event.target.value);
        }}               
      />
      <label className="text-xl" htmlFor="ingredients">Ingredients (Add each with a comma ",")</label>
      <input 
        className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
        type="text" 
        id="ingredients" 
        name="ingredients"
        value={addRecipeIngreds}
        onChange={(event) => {
          setAddRecipeIngreds(event.target.value);
        }}         
      />
      <label className="text-xl" htmlFor="steps">Steps (Add each step with a comma ",")</label>
      <input 
        className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
        type="text" 
        id="steps" 
        name="steps"
        value={addRecipeSteps}
        onChange={(event) => {
          setAddRecipeSteps(event.target.value);
        }}          
      />
      <label className="text-xl" htmlFor="category">Category</label>
      <input 
        className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
        type="text" 
        id="category" 
        name="category"
        value={addRecipeCategory}
        onChange={(event) => {
          setAddRecipeCategory(event.target.value);
        }}          
      />      
      <div className="flex justify-center gap-x-4 mt-12">
        <Button 
          buttonText="submit"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={submitRecipe}
        />
        <Button 
          buttonText="cancel" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
          buttonClick={closeModal}
        />
      </div>
    </div>
  )
}

export default AddRecipe