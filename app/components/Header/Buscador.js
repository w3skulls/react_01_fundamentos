import React from 'react';
import Error from '../Error'

const TAG = "[Buscador.js]";
const ENTER_KEY_CODE = 13;
const EMPTY_VALUE = "";


export default class Buscador extends React.Component{


    handleOnKeyDown(event){
        let err = new Error();
        //Podemos hacer referencia a las refs (propiedades de React)
        let buscadorTextValue = (this.refs.buscador.value).trim();

        //Cuando pulsamos ENTER, evaluamso el VALUE y continuamos.
        if(event.keyCode === ENTER_KEY_CODE){
            if(buscadorTextValue === EMPTY_VALUE){
                //this.refs >> devulve todas las referencias que tiene este componente
                err.setError(400);
            }

            //Añadimos Items a la lista provisional de Items
            console.log(TAG+"_Pulsado ENTER--buscadorTextValue:", buscadorTextValue);
            this.refs.buscador.value = EMPTY_VALUE;
        }
    }


    render(){
        return(
            <div>
                <input 
                    ref="buscador"
                    onKeyDown={this.handleOnKeyDown.bind(this)}
                    className="input buscador" 
                    placeholder="Buscar" />
            </div>
        )
    }

}