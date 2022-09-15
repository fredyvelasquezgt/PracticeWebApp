import React, { useState } from 'react'

const Formulario = () => {

   //hago un estado por cada input
    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lista, setLista] = useState([])


    


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
        setLista([
            ...lista, //pongo lo que ya tengo
            {nombreFruta: fruta, nombreDescripcion: descripcion} //agrego 
        ])

        e.target.reset(); //limpia los campos
        setFruta(''); //limpia todo
        setDescripcion(''); //limpia todo

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
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                                {item.nombreFruta} - {item.nombreDescripcion}
                            </li>
                         
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
