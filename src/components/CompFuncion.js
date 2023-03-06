import React, {useState} from "react";

function Funcional (){
const [contar, setContar] = useState(0)
const agregarUno =()=>{
    setContar(contar+1)
}
const restarUno =()=>{
    setContar(contar-1)
}

    return(
        <>
        <h1>contador: {contar}</h1>
        <button onClick={agregarUno}>sumar</button>
        <button onClick={restarUno}>restar</button>
        </>
    )
}



export default Funcional