function Dropdown({recipes, selectedCategory, setSelectedCategory}) {
  const categories = Array.from(new Set(recipes.map((recipe) => recipe.category)));
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <form class="mt-4 sm:mt-0" action="">
        <select data-element="select-dropdown" value={selectedCategory} onChange={handleCategoryChange} className="drop-shadow-btn px-2 py-2 h-10 rounded-md capitalize w-64 max-w-full" name="">
          <option value="All">All</option>
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
