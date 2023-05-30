import React from 'react';
import { useState } from 'react'
import Button from '../atoms/Button'
import { ModalDataContext } from '../organism/Recipes';
function EditRecipe({ setEditRecipeModal, setRecipes, recipes }) {
  const {modalRecipeData} = React.useContext(ModalDataContext);
  const [editRecipeID, setEditRecipeID] = useState(modalRecipeData.id);
  const [editRecipeName, setEditRecipeName] = useState(modalRecipeData.title);
  const [editRecipeDescription, setEditRecipeDescription] = useState(modalRecipeData.description);
  const [editRecipeIngredients, setEditRecipeIngredients] = useState(modalRecipeData.ingredients);
  const [editRecipeSteps, setEditRecipeSteps] = useState(modalRecipeData.steps);
  const [editRecipeCategory, setEditRecipeCategory] = useState(modalRecipeData.category);



  //Current issue I believe is recipe needs a new ID when updated? Maybe

  function closeModal() {
    setEditRecipeModal(false);
  }

  const editRecipe = (e) => {
    e.preventDefault();
    console.log('You have edited the recipe! and submitted the from')
    const editedRecipe = {

      name: editRecipeName,
      description: editRecipeDescription,
      ingredients: editRecipeIngredients,
      steps: editRecipeSteps,
      category: editRecipeCategory,
    };

    console.log(`Sending request to server:${editedRecipe}`)

    /*
    setModalRecipeData({
      id: recipeID,
      title: editRecipeName,
      description: editRecipeDescription,
      steps: editRecipeSteps,
      ingredients: editRecipeIngredients,
      category: editRecipeCategory
    })
    */
    
    fetch(`http://localhost:3002/api/recipes/${modalRecipeData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },      
        body: JSON.stringify(editedRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes([...recipes, data]);
      })
      .catch((err) => console.error(err));    
      closeModal();
  };  

  return (
    <div>
      <h2 className="text-2xl">Edit</h2>
      <p>{modalRecipeData.id}</p>
      <form onSubmit={editRecipe}>
        <label className="text-xl" htmlFor="recipeName">Recipe Name</label>
        <p>{modalRecipeData.title}</p>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="recipeName" 
          name="recipeName"
          value={editRecipeName}
          onChange={(event) => {
            setEditRecipeName(event.target.value)
          }}
        />
        <p>{editRecipeName}</p>
        <label className="text-xl" htmlFor="description">Description</label>
        <p>{modalRecipeData.description}</p>
        <textarea 
          className="block drop-shadow-default w-full mt-2 mb-4" 
          type="text" 
          id="description" 
          name="description" 
          value={editRecipeDescription}
          onChange={(event) => {
            setEditRecipeDescription(event.target.value)
          }}               
        />
        <p>{editRecipeDescription}</p>
        <label className="text-xl" htmlFor="ingredients">Ingredients (Add each with a comma ",")</label>
        <p>{modalRecipeData.ingredients}</p>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="ingredients" 
          name="ingredients"
          value={editRecipeIngredients}
          onChange={(event) => {
            setEditRecipeIngredients(event.target.value)
          }}         
        />
        <p>{editRecipeIngredients}</p>
        <label className="text-xl" htmlFor="steps">Steps (Add each step with a comma ",")</label>
        <p>{modalRecipeData.steps}</p>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="steps" 
          name="steps"
          value={editRecipeSteps}
          onChange={(event) => {
            setEditRecipeSteps(event.target.value)
          }}          
        />
        <p>{editRecipeSteps}</p>
        <label className="text-xl" htmlFor="category">Category</label>
        <p>{modalRecipeData.category}</p>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="category" 
          name="category"
          value={editRecipeCategory}
          onChange={(event) => {
            setEditRecipeCategory(event.target.value)
          }}          
        />
        <p>{editRecipeCategory}</p>
        
        <div className="flex justify-center gap-x-4 mt-12">
          <Button 
            buttonText="edit recipe"
            buttonColor="bg-sand-brown"
            buttonHover="hover:bg-sand-brown-hov"
            buttonClick={editRecipe}
          />
          <Button 
            buttonText="cancel" 
            buttonTextColor="text-white"
            buttonColor="bg-retro-red"
            buttonHover="hover:bg-retro-red-hov"
            buttonClick={closeModal}
          />
        </div>
      </form>
    </div>
  )
}

export default EditRecipe