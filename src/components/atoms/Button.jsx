import React from 'react'

function Button({buttonText, buttonColor}) {
  return (
    <button className={`uppercase font-bold w-max px-4 py-2 rounded-md drop-shadow-btn ${buttonColor}`}>
      {buttonText}
    </button>
  )
}

export default Button