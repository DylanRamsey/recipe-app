import React from 'react'
import { useState } from 'react'
import Button from '../atoms/Button'
function Login({loginModal, setLoginModal, setIsLoggedIn}) {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState(false);

  if(loginError === false){
    console.log('no login error')
  }else {
    console.log('oop login error')
  }

  function closeModal() {
    setLoginModal(false);
  }

  const loginUser = (e) => {
    e.preventDefault();
    const userLogin = {
      name: loginUsername,
      email: loginEmail,
      password: loginPass,
    };
    console.log('Sending request to server:', userLogin);
    fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },      
      body: JSON.stringify(userLogin),
    })
      .then((res) => {
        res.json()
        if(res.status == 200){
          setIsLoggedIn(true);
          setLoginModal(false);
        }else {
          setLoginError(true);
        }
      })
      .catch((err) => console.error(err));    
  }  

  return (
    <>
      <h2 className="text-2xl text-center leading-tight mb-3 capitalize">Login</h2>
      <form onSubmit={loginUser}>
        <label className="text-xl" htmlFor="userName">Username</label>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="userName" 
          name="userName"
          value={loginUsername}
          onChange={(event) => {
            setLoginUsername(event.target.value)
          }}
        />
        <label className="text-xl" htmlFor="email">Email</label>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="text" 
          id="email" 
          name="email"
          value={loginEmail}
          onChange={(event) => {
            setLoginEmail(event.target.value)
          }}
        />      
        <label className="text-xl" htmlFor="password">Password</label>
        <input 
          className="block drop-shadow-default w-full mt-2 mb-4 pb-4" 
          type="password" 
          id="password" 
          name="password"
          value={loginPass}
          onChange={(event) => {
            setLoginPass(event.target.value)
          }}
        />        
      </form>
      <div className="flex justify-center gap-x-4 mt-12">
        <Button 
          buttonText="Login"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={loginUser}
        />      
        <Button 
          buttonText="Cancel" 
          buttonTextColor="text-white"
          buttonColor="bg-retro-red"
          buttonHover="hover:bg-retro-red-hov"
          buttonClick={closeModal}
        />
      </div>
      { loginError == true && 
        <p>Login was unsuccesfull, please try again</p>
      }
    </>
  )
}

export default Login