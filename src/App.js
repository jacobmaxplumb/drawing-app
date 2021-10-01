import './App.css';
import { ColorPicker } from './components/ColorPicker/ColorPicker';
import { Container } from '@mui/material';

function App() {

  return (
    <Container maxWidth="lg">
      <ColorPicker sayHello={sayHello} />
    </Container>
  );
}

export default App;
