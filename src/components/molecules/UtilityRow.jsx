import Button from '../atoms/Button'
import Dropdown from '../atoms/Dropdown';

function UtilityRow({data}) {
  return (
    <div className="flex justify-between w-[26rem] mx-auto">
      <Button 
        buttonText="add recipe"
        buttonColor="bg-sand-brown"
        buttonHover="hover:bg-sand-brown-hov"
      />
      <Dropdown
        data={data}
      />
    </div>
  )
}

export default UtilityRow;