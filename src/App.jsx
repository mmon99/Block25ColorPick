import { useState } from 'react';
import ColorButton from './ColorButton.jsx';
import PickedColor from './PickedColor.jsx';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('')

  const [pickedColor, setPickedColor] = useState ('')
  
  return (
  <>
  <PickedColor selectedColor={selectedColor} />
  <ColorButton colorName="Yellow" setSelectedColor={setSelectedColor}/>
  <ColorButton colorName="Green" setSelectedColor={setSelectedColor}/>
  <ColorButton colorName="Black" setSelectedColor={setSelectedColor}/>
  </>
  );
};

export default App


