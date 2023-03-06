import React from "react";


export default class ComponenteClase extends React.Component{
constructor (props){
    super (props);
    this.state={
        count: 0
    }
}
sumarUno = ()=>{
    this.setState({count:this.state.count+1
    })
}
quitarUno = ()=>{
    this.setState({count:this.state.count-1
    })
}


render(){
    return(
        <div><h1>contador : {this.state.count}</h1>
        <button onClick={this.sumarUno}>sumar</button>
        <button onClick={this.quitarUno}>restar</button>
        </div>
    )
}



}