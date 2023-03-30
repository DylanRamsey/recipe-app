import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown';

function UtilityRow() {
  return (
    <div className="flex justify-between w-[26rem] mx-auto">
      <Button 
        buttonText="add recipe"
        buttonColor="bg-sand-brown"
        buttonHover="hover:bg-sand-brown-hov"
      />
      <Dropdown />
    </div>
  )
}

export default UtilityRow;