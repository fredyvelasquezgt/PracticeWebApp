import React from 'react'

const Formulario = () => {
    return (
        <div>
            <h2>Formulario</h2>
            <form>
                <input type="text"
                placeholder="Ingrese fruta"
                className="form-control mb-2" 
                />
                  <input type="text"
                placeholder="Ingrese descripcion"
                className="form-control mb-2" 
                />
            </form>
            <button className="btn btn-primary btn-block">Agregar</button>
        </div>
    )
}

export default Formulario
