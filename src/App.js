import logo from './logo.svg';
import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <div className="App">
      {show ? (<ColorPicker />) : (<></>)}
      <Button variant="contained" onClick={toggleShow}>Toggle</Button>
    </div>
  );
}

export default App;
