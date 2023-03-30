import React from 'react'

function Dropdown() {
  return (
    <form action="">
      <select className="px-2 py-2 h-10 rounded-md w-64" name="" id="">
        <option value="" disabled selected>Filter...</option>
        <option className='capitalize' value="italian">italian</option>
        <option className='capitalize' value="mexican">mexican</option>
        <option className='capitalize' value="appetizer">appetizer</option>
        <option className='capitalize' value="dessert">dessert</option>        
      </select>
    </form>
  )
}

export default Dropdown
