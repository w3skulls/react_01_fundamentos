import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Carousel from './components/Carousel/Carousel';

/**
 * ESTADOS EN REACT
 * Todo componente en React tiene un estado.
 * Los estados son 
 * Por defecto el estado de un componente es null.
 * Accedemos al estado de un componente mediante this.state.
 * El estado se declara en el contructor mediante this.state = {}
 * Cuando cambia el estado, mediante this.setState(), se vuelve a renderizar el contenido que ha cambiado (por comparación del DOM con el virtualDOM).
 */

 /**
  * PROPS EN REACT
  * Se usan para pasar información a componentes hijos.
  * 
  */


class App extends React.Component{

  render(){
    const viajes = [
      {
        nombre: "CALIFORNIA",
        imagen: "california.jpg",
        precio: 680,
        descripcion: "Viaje a California, muy bonito."
      },
      {
        nombre: "NUEVA YORK",
        imagen: "ny.jpg",
        precio: 450,
        descripcion: "Viaje a NY, con concierto incluido."
      },{
        nombre: "AZORES",
        imagen: "azores.jpg",
        precio: 360,
        descripcion: "Viaje a las Azores, espectacular."
      }
    ];



    return(
      <div>
        <Header />
        <Main viajes = {viajes}/>
        <Footer/>
      </div>
    )
  }
}


render(<App/>, document.getElementById('root'));
