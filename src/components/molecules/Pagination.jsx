import React from 'react'

function Pagination({recipePerPage, totalRecipes, paginate}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalRecipes / recipePerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className="flex justify-center mt-12 ">
      {pageNumbers.map(number => (
        <li key={number} className="">
          <a onClick={() => paginate(number)} href="!#" className="p-3 bg-sand-brown rounded-lg	focus:outline-none focus:ring focus:sand-brown-hov mx-2">
            {number}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination