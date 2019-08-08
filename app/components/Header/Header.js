import React from 'react';
import Buscador from './Buscador';



export default class Header extends React.Component{

    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        return(
            <header className="navbar navbar-inverse">
                <div className="flex flex-between">
                    <div>{this.props.fnComoProp()}</div>
                <Buscador />
                </div>
               
            </header>
        )
    }

}