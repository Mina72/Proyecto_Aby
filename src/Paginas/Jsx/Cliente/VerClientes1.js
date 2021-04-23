/* ejemplo de class based component
siempre debe heredar de la clase Component
*/

import React, {Component} from 'react';
import NuevoCliente1 from './NuevoCliente1';
import NuevoCliente2 from './NuevoCliente2';
import NuevoCliente3 from './NuevoCliente3';
import NuevoCliente4a from './NuevoCliente4a';
import nuevoclientev4b from './NuevoCliente4b';
import Car from './EjemploState';
import MyHelloComponent from './EjemploState2';
import MyComponent from './EjemploState3';


class verclientes1 extends Component{
    render(){
        return(
            <div>
                <p>Uso de class based components</p>
                <NuevoCliente1 />
                <NuevoCliente2 />
                <NuevoCliente3 nombre='Luke SkyWalker' edad='25'>
                    <h1>Bienvenido</h1>
                </NuevoCliente3>
                <NuevoClientev4a nombre='Han Solo' edad='30' >
                    <h1>Hola mundo!</h1>
                </NuevoClientev4a> 
                <Car />
                <MyHelloComponent />
                <MyComponent />
                <nuevoclientev4b nombre='Leia Organa' edad='22' />
            </div>
        )
    }
}

export default verclientes1