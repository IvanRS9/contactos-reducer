import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const Formulario = ({ dispatch }) => {
    const [data, setData] = useState({ nombre: '', numero: '' });

    const { nombre, numero } = data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const actionAdd = {
        type: 'add',
        payload: {
            id: uuid(),
            nombre,
            numero
        }
    }

    const handleAdd = () => {
        if (nombre.trim() === '' || numero.trim() === '') return;

        dispatch(actionAdd);

        setData({
            nombre: '',
            numero: ''
        });
    };

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input onChange={handleChange} name='nombre' value={nombre}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                    Número
                </label>
                <input onChange={handleChange} name='numero' value={numero}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    type="text"
                    placeholder="Número"
                />
            </div>
            <div className="flex items-center justify-between">
                <button onClick={handleAdd}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Agregar Contacto
                </button>
            </div>
        </form>
    )
}

export default Formulario
