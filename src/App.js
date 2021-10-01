import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Container } from '@mui/material';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  const handleColorChange = (c) => {
    setColor(c);
  }

  return (
    <Container maxWidth="lg">
      <ColorPicker color={color} handleColorChange={handleColorChange} />
    </Container>
  );
}

export default App;
