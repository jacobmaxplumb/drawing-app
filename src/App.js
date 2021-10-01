import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Container } from '@mui/material';
import { useState } from 'react';
import { Canvas } from './components/Canvas/Canvas';
import { DotActions } from './components/DotActions/DotActions';

function App() {
  const [color, setColor] = useState('');

  const handleColorChange = (c) => {
    setColor(c);
  }

  return (
    <Container maxWidth="lg">
      <ColorPicker color={color} handleColorChange={handleColorChange} />
      <Canvas color={color} />
      <DotActions />
    </Container>
  );
}

export default App;
