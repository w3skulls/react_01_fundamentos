import React from 'react';
import jamaica from './jamaica.jpg'
import california from './california.jpg'
import azores from './azores.jpg'
class Main extends React.Component{
    render(){
        return(
            <main className="container">
                <div className="col-md-4 col-sm-4 viaje-item">
                    <div className="footer-menu no-padding">
                        <h4>
                            <span>JAMAICA</span>
                            <span>450€</span>
                        </h4>
                        <figure>
                            <img src={azores} alt="azores.jpg"/>
                        </figure>
                        <p>Viajes a Jamaica: Las mejores ofertas para ir a Jamaica. Encuentra viajes baratos a Jamaica, y reserva un paquete vacacional a Jamaica con Destinia.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 viaje-item">
                    <div className="footer-menu no-padding">
                        <h4>
                            <span>CALIFORNIA</span>
                            <span>670€</span>
                        </h4>
                        <figure>
                            <img src={california} alt="california.jpg"/>
                        </figure>
                        <p>La guía más completa de viaje y turismo sobre California. Todo lo que necesitas saber para preparar y organizar tu viaje: que visitar, itinerarios, consejos, clima.</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 viaje-item">
                    <div className="footer-menu no-padding">
                        <h4>
                            <span>AZORES</span>
                            <span>670€</span>
                        </h4>
                        <figure>
                            <img src={jamaica} alt="jamaica.jpg"/>
                        </figure>
                        <p>En la inmensidad azul del Atlántico, la madre naturaleza creó una tierra repleta de belleza natural y que espera a que la exploren: el archipiélago de las Azores.</p>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;