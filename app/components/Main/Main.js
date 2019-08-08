import React from 'react';
import jamaica from './jamaica.jpg'
import california from './california.jpg'
import azores from './azores.jpg'
import ViajeItem from './ViajeItem';
import Listado from './Listado';

let TAG = "[class Main.js]";

class Main extends React.Component{
    
    //Añadimos el estado inicial del componente.
    constructor(props){
        super(props)
        //console.log(TAG + ' props', props)
    }

    getProps(){
        let resViajes = this.props.viajes;
        return resViajes;
    }

    render(){

        let testTimeOut = function(componente){
            //console.log("Cambiado el estado del componente " + componente);
        }

        let resViajes = this.getProps();
        return(
            <main className="container">
                <div id="main">
                    {
                        resViajes.map(function(elem, index){
                            return <ViajeItem key={index} viaje={elem} test={testTimeOut}/>
                        })
                    }
                </div>

                <div id="listado">
                    <Listado />
                </div>

            </main>
        )
    }
}

export default Main;