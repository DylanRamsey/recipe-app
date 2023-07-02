function Button({buttonText, buttonColor, buttonHover, buttonTextColor, buttonClick}) {
  return (
    <button 
      className={`uppercase font-bold w-max mx-2 px-4 py-2 rounded-md drop-shadow-btn ${buttonColor} ${buttonHover} ${buttonTextColor}`}
      onClick={buttonClick}
    >
      {buttonText}
    </button>
  )
}

export default Button