import './App.css';
import Boton from './Componentes/Boton';
import freeCodeCampLogo from './Imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className= 'freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <Boton>1</Boton>
        <Boton>2</Boton>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>

      </div>
    </div>
  );
}

export default App;
