import React from 'react';


export default class Header extends React.Component{

    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        return(
            <header className="navbar navbar-inverse">
                <p>Soy el header</p>
                <p>{this.props.fnComoProp()}</p>
            </header>
        )
    }

}