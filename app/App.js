import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends React.Component{

  render(){
    return(
      <div>
        <Header />
        
        <Footer/>
      </div>
    )
  }
}


render(<App/>, document.getElementById('root'));
