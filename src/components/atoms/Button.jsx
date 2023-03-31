function Button({buttonText, buttonColor, buttonHover, buttonTextColor}) {
  return (
    <button className={`uppercase font-bold w-max px-4 py-2 rounded-md drop-shadow-btn ${buttonColor} ${buttonHover} ${buttonTextColor}`}>
      {buttonText}
    </button>
  )
}

export default Button