import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const TablaContactos = ({ contactos = [], dispatch }) => {
    const handleDelete = (id) => {
        const actionDelete = {
            type: 'delete',
            payload: id
        }

        dispatch(actionDelete);
    };

    return (
        <div className='max-w-screen'>
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr className='text-center'>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Numero
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {contactos.map((contacto) => (
                        <tr key={contacto.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 text-bold">{contacto.id.split("-")[0]}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{contacto.nombre}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{contacto.numero}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleDelete(contacto.id)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaContactos
