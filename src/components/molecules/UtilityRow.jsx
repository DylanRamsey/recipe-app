import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown';

function UtilityRow() {
  return (
    <div className="flex justify-between w-96 mx-auto">
      <Button 
        buttonText="add recipe"
        buttonColor="bg-sand-brown"
      />
      <Dropdown />
    </div>
  )
}

export default UtilityRow;