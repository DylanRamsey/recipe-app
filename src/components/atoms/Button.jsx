function Button({buttonText, buttonColor, buttonHover}) {
  return (
    <button className={`uppercase font-bold w-max px-4 py-2 rounded-md drop-shadow-btn ${buttonColor} ${buttonHover}`}>
      {buttonText}
    </button>
  )
}

export default Button