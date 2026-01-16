import './App.css';
import imagen from "../src/imagenes/logo1.png";
import Boton from "../src/componentes/Boton";
import Pantalla from "../src/componentes/Pantalla";
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';                 //para estados
import { evaluate } from "mathjs"

function App() {

  const [input, setInput]= useState("");

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado =() => {
    setInput(evaluate(input));
  }


  return (
    <div className="App">
      
        <div className='contenedor'>
          <img src={imagen} className='logo' alt="logo de calculadora" />

        </div>

        <div className='calculadora'>

          <Pantalla input={input} />


          <div className='fila'>

          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput} >/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput("")}>
              Clear
              </BotonClear>
          </div>
          <div className='fila'></div>
        </div>





    </div>
  );
}

export default App;
