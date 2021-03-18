
import './App.css';
import Contenedor from './componentes/Contenerdo.js';
import { BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Contenedor/>   
      </BrowserRouter>
    </div>
  );
}

export default App;
