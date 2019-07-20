import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

/**
 * Todo componente en React tiene un estado.
 * Por defecto el estado de un componente es null.
 * 
 */


class App extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer/>
      </div>
    )
  }
}


render(<App/>, document.getElementById('root'));
