import { useState, useEffect } from 'react';
import Button from '../atoms/Button'
function EditRecipe({ editRecipeModal, setEditRecipeModal, afterSetModalRecipeID}) {

  const [editedTitle, setEditedTitle] = useState('');
 
  useEffect(() => {
    fetch(`http://localhost:3001/api/recipes/${afterSetModalRecipeID}`)
      .then((res) => res.json())
      .then((data) => {
        setEditedTitle(data.name);
      })
      .catch((err) => console.error(err));
  }, [afterSetModalRecipeID]);


  const editRecipe = (e) => {
    e.preventDefault();
    console.log('You have edited the recipe! and submitted the from')
  
    fetch(`http://localhost:3001/api/recipes/${afterSetModalRecipeID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ editedTitle}),
    })
      .then((res) => {
        if (res.ok) {
          onUpdate();
        }
      })
      .catch((err) => console.error(err));

  };  

  function closeModal() {
    setEditRecipeModal(false);
  }

  return (
    <div>
      <h2 className="text-2xl">Edit</h2>
      <form onSubmit={editRecipe}>
        <label className="text-xl" htmlFor="recipeName">Recipe Name</label>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="recipeName" 
          name="recipeName"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <h2>{editedTitle}</h2>
        <label className="text-xl" htmlFor="description">Description</label>
        <textarea 
          className="block drop-shadow-default w-full mt-2 mb-4" 
          type="text" 
          id="description" 
          name="description" 
          value=""
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
          value=""
          onChange={(event) => {
            setAddRecipeIngreds(event.target.value.split(','));
          }}         
        />
        <label className="text-xl" htmlFor="steps">Steps (Add each step with a comma ",")</label>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="steps" 
          name="steps"
          value=""
          onChange={(event) => {
            setAddRecipeSteps(event.target.value.split(','));
          }}          
        />
        {/*
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
        */}
        
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