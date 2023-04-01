import { useState } from "react";

function Dropdown({data}) {
  const categories = Array.from(new Set(data.map((recipe) => recipe.category)));

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <form action="">
        <select data-element="select-dropdown" value={selectedCategory} onChange={handleCategoryChange} className="px-2 py-2 h-10 rounded-md capitalize w-64 max-w-full" name="" id="">
          <option value="" disabled selected>filter...</option>
          <option value="all">All</option>
          {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        </select>
      </form>
    </>
  )
}

export default Dropdown
