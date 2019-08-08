import React from 'react';


let TAG = "[class ViajeItem.js]";

class ViajeItem extends React.Component{
    
    //Añadimos el estado inicial del componente.
    constructor(props){
        super(props)
        console.log(TAG+"_props", props );
        //console.log(TAG + ' props', props);
    }

    render(){

        const imagenViaje = this.props.viaje.imagen;
        console.log("imagenViaje", imagenViaje)

        //console.log("__dirname",__dirname+"components")


        return(
            <div className="col-md-4 col-sm-4 viaje-item">
                <div className="footer-menu no-padding">
                    {
                        this.props.test(this.props.viaje.nombre)
                    }
                    <h4>
                        <span>{this.props.viaje.nombre}</span>
                        <span>{this.props.viaje.precio}€</span>
                    </h4>
                    <figure>
                        <img src={'../components/Main/'+imagenViaje} alt={this.props.viaje.imagen} />
                    </figure>
                    <p>{this.props.viaje.descripcion}</p>
                    <br/>
                    <button className="btn btn-info verOferta">Ver oferta</button>
                </div>
            </div>
        )
    }
}

export default ViajeItem;