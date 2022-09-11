import React, { useState } from 'react'

const Formulario = () => {


    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')

    //hago un estado por cada input

    return (
        <div>
            <h2>Formulario</h2>
            <form>
                <input type="text"
                placeholder="Ingrese fruta"
                className="form-control mb-2" 
                onChange={e => setFruta(e.target.value)}
                />
                  <input type="text"
                placeholder="Ingrese descripcion"
                className="form-control mb-2" 
                onChange={e => setDescripcion(e.target.value)}
                />
            </form>
            <button className="btn btn-primary btn-block">Agregar</button>
        </div>
    )
}

export default Formulario
