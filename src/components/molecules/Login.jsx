import React from 'react'
import Button from '../atoms/Button'
function Login({loginModal, setLoginModal, setIsLoggedIn}) {

  function closeModal() {
    setLoginModal(false);
  }

  function loginSubmit() {
    setIsLoggedIn(true);
    setLoginModal(false);
  }

  return (
    <>
      <h2 className="text-2xl text-center leading-tight mb-3 capitalize">Login</h2>
      <form onSubmit="">
        <label className="text-xl" htmlFor="userName">Username</label>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="userName" 
          name="userName"
          //value={stateExample}
          onChange={(event) => {
            //setStateExample(event.target.value)
          }}
        />
        <label className="text-xl" htmlFor="password">Password</label>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="password" 
          id="password" 
          name="password"
          //value={stateExample}
          onChange={(event) => {
            //setStateExample(event.target.value)
          }}
        />        
        
      </form>
      <div className="flex justify-center gap-x-4 mt-12">
        <Button 
          buttonText="Login"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={loginSubmit}
        />      
        <Button 
          buttonText="Cancel" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
          buttonClick={closeModal}
        />
      </div>
    </>
  )
}

export default Login