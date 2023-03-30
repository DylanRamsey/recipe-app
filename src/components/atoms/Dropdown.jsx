function Dropdown() {
  return (
    <>
      <form action="">
        <select data-element="select-dropdown" className="px-2 py-2 h-10 rounded-md capitalize w-64 max-w-full" name="" id="">
          <option value="" disabled selected>filter...</option>
          <option value="all">All</option>
          <option value="italian">italian</option>
          <option value="mexican">mexican</option>
          <option value="appetizer">appetizer</option>
          <option value="dessert">dessert</option>        
        </select>
      </form>
    </>
  )
}

export default Dropdown
