import React from 'react';
import la from './la.jpg'
import chicago from './chicago.jpg'
import ny from './ny.jpg'

export default class Carousel extends React.Component{
    render(){
        return(
            <div className="container">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div className="carousel-inner">
                    <div className="item active">
                        <img src={la} alt="Los Angeles"/>
                    </div>

                    <div className="item">
                        <img src={chicago} alt="Chicago"/>
                    </div>
                    
                    <div className="item">
                        <img src={ny} alt="New york"/>
                    </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }

}