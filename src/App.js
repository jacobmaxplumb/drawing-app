import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Container } from '@mui/material';
import { useState } from 'react';
import { Canvas } from './components/Canvas/Canvas';
import { DotActions } from './components/DotActions/DotActions';
import axios from 'axios';

function App() {
  const [color, setColor] = useState('');
  const [dots, setDots] = useState([]);

  const handleColorChange = (c) => {
    setColor(c);
  }

  const handleAddDot = (dot) => {
    setDots([...dots, dot]);
  }

  const clearDots = () => {
    setDots([]);
  }

  const updateDots = (ds) => {
    setDots(ds);
  }

  const saveDots = () => {
    return axios.post('http://localhost:8080/runs', {runs: dots}).then(() => {
      console.log('saved successfully');
      clearDots();
    })
  }

  return (
    <Container maxWidth="lg">
      <ColorPicker color={color} handleColorChange={handleColorChange} />
      <Canvas handleAddDot={handleAddDot} dots={dots} color={color} />
      <DotActions updateDots={updateDots} saveDots={saveDots} clearDots={clearDots} />
    </Container>
  );
}

export default App;
