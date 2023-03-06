import React from "react";

function Funcional(props){
    return(
        <div>
            <h1>nombre : {props.nombre}</h1>
            <p>edad: {props.edad}</p>
        </div>
    )
}

export default Funcional;