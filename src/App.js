import React from 'react';
import './App.css';
import BotonContador from './componentes/boton';
import Contador from './componentes/Contador';
import LogoAppContador from './imagenes/logoapp.png';
import { useState } from 'react';


function App() {
  const[ numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo-2do'
          src={LogoAppContador}
          alt='Logo de la segunda app'
        />
      </div>
      <div className='contendor-contador'>
        <Contador 
          numClics={numClics}
        />
        <BotonContador 
          texto='Clic'
          BotonClic={true}
          manejarClic={manejarClic} 
        />

          <BotonContador 
          texto='Reiniciar'
          BotonClic={false}
          manejarClic={reiniciarContador}  
           />
      </div>
    </div>
  );
}

export default App;
