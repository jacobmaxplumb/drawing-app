import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Container } from '@mui/material';
import { useState } from 'react';
import { Canvas } from './components/Canvas/Canvas';

function App() {
  const [color, setColor] = useState('');

  const handleColorChange = (c) => {
    setColor(c);
  }

  return (
    <Container maxWidth="lg">
      <ColorPicker color={color} handleColorChange={handleColorChange} />
      <Canvas />
    </Container>
  );
}

export default App;
