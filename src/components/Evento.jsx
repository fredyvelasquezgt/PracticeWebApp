import React, {} from 'react'

const Evento = () => {
    const eventoClick = () => {
        console.log('me diste click')
    }
    
    return (   
        <>
            <hr></hr>
            <h2>Eventos</h2>
            <button onClick={ () => eventoClick()}>Click</button>
        </>
           
    )
}

export default Evento
