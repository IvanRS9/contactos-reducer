import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types';

const Formulario = ({ dispatch, currentContact, setCurrentContact }) => {
    const [data, setData] = useState({
        id: currentContact?.id || '',
        nombre: currentContact?.nombre || '',
        numero: currentContact?.numero || '',
        sexo: currentContact?.sexo || 'Masculino',  // Valor por defecto
        cumpleaños: currentContact?.cumpleaños || '',
        imagen: currentContact?.imagen || ''
    });

    const { nombre, numero, sexo, cumpleaños, imagen } = data;

    useEffect(() => {
        setData({
            id: currentContact?.id || '',
            nombre: currentContact?.nombre || '',
            numero: currentContact?.numero || '',
            sexo: currentContact?.sexo || 'Masculino',
            cumpleaños: currentContact?.cumpleaños || '',
            imagen: currentContact?.imagen || ''
        });
    }, [currentContact]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleAddOrUpdate = () => {
        if (nombre.trim() === '' || numero.trim() === '' || cumpleaños === '') return; // Validaciones

        const action = {
            type: data.id ? 'update' : 'add', // Verificamos si es agregar o modificar
            payload: {
                ...data,
                id: data.id || uuid(), // Si es nuevo contacto, genera un ID
            }
        };

        dispatch(action);

        // Limpiar formulario
        setData({
            nombre: '',
            numero: '',
            sexo: 'Masculino',
            cumpleaños: '',
            imagen: ''
        });

        setCurrentContact(null); // Limpiar contacto actual
    };

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Nombre */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input onChange={handleChange} name='nombre' value={nombre}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" type="text" placeholder="Nombre" />
            </div>

            {/* Número */}
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                    Número
                </label>
                <input onChange={handleChange} name='numero' value={numero}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="number" type="text" placeholder="Número" />
            </div>

            {/* Sexo */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexo">
                    Sexo
                </label>
                <select onChange={handleChange} name="sexo" value={sexo}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            {/* Cumpleaños */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cumpleaños">
                    Cumpleaños
                </label>
                <input onChange={handleChange} name="cumpleaños" value={cumpleaños}
                    type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            {/* Imagen */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
                    URL Imagen (Avatar)
                </label>
                <input onChange={handleChange} name="imagen" value={imagen}
                    type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="URL de la imagen" />
            </div>

            {/* Botón */}
            <div className="flex items-center justify-between">
                <button onClick={handleAddOrUpdate}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    {data.id ? 'Modificar Contacto' : 'Agregar Contacto'}
                </button>
            </div>
        </form>
    );
};

// Validación de PropTypes
Formulario.propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentContact: PropTypes.shape({
        id: PropTypes.string,
        nombre: PropTypes.string,
        numero: PropTypes.string,
        sexo: PropTypes.string,
        cumpleaños: PropTypes.string,
        imagen: PropTypes.string
    }),
    setCurrentContact: PropTypes.func.isRequired
};

export default Formulario;