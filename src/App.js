import './App.css';
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
        
      </div>
    </div>
  );
}

export default App;
