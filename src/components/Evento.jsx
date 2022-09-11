import React, {Fragment, useState} from 'react'

const Evento = () => {

    const [texto, setTexto] = useState('Texto desde estado')

    const eventoClick = () => {
        console.log('me diste click');
        setTexto('cambiando el texto');
    }

   
    
    return (   
        <>
            <hr></hr>
            <h2>{texto}</h2>
            <button onClick={ () => eventoClick()}>Click</button>
        </>
           
    )
}

export default Evento
