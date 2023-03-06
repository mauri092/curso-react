import React from "react";

export default class Clase extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }
    
    render(){
    return(
        <div>
            <h1>{this.props.nombre}</h1>
            <p>{this.props.edad}</p>
        </div>
    )}

}