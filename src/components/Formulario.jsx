import React, { useState } from 'react'

const Formulario = () => {


    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')

    //hago un estado por cada input


    const guardarDatos = (e) => {
        e.preventDefault() //evito lo que haga por defecto

        if(!fruta.trim()) {
            console.log('esta vacio fruta')
            return //el retyrb
        }

        if(!descripcion.trim()) {
            console.log('esta vacio descripcion')
            return
        }
    
        console.log('procesando datos...' + fruta + descripcion)

    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input 
                    type="text"
                    placeholder="Ingrese fruta"
                    className="form-control mb-2" 
                    onChange={e => setFruta(e.target.value)}
                />
                  <input 
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2" 
                    onChange={e => setDescripcion(e.target.value)}
                />
                    <button className="btn btn-primary btn-block"
                    type="submit">Agregar</button>

            </form>
        </div>
    )
}

export default Formulario
