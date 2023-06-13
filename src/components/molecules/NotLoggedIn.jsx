import React from 'react'
import Button from '../atoms/Button'

function NotLoggedIn({setNotLoggedInModal, setLoginModal}) {

  function closeModal() {
    setNotLoggedInModal(false);

  }
  return (
    <div>
      <h2 className='text-xl font-bold'>You are not logged in, please login to perform this action</h2>
      <div className="flex justify-center gap-x-4 mt-12">
        <Button 
          buttonText="close"
          buttonColor="bg-sand-brown"
          buttonHover="hover:bg-sand-brown-hov"
          buttonClick={closeModal}
        />
      </div>
    </div>
  )
}

export default NotLoggedIn