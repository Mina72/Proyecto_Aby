import React, { Component } from 'react';

/*
uso de props:
-props -> propiedad (parametros)
-en java usamos parametros para trabajar con funciones getters y setters
-un props puede tener cualquier tipo de datos
-utilizacion de props en un class based component
-class based component
- ejemplo de props.children
*/

class nuevoclientev4a extends Component{
    render(){
    return <div>
                <p>Mi nombre es {this.props.nombre}, soy un
                cliente y tengo {this.props.edad} años</p>
                {this.props.children}
            </div>
    }
}

export default nuevoclientev4a;