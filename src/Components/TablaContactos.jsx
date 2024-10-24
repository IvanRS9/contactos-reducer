import React from 'react'
import PropTypes from 'prop-types';

const TablaContactos = ({ contactos = [], dispatch, setCurrentContact }) => {
    const handleDelete = (id) => {
        const actionDelete = {
            type: 'delete',
            payload: id
        };

        dispatch(actionDelete);
    };

    const calculateAge = (birthday) => {
        const today = new Date();
        const birthDate = new Date(birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider">ID</th>
                        <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider">Nombre</th>
                        <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider">Número</th>
                        <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider">Sexo</th>
                        <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider">Edad</th>
                        <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider">Imagen</th>
                        <th className="py-3 px-6 text-center text-xs font-semibold uppercase tracking-wider">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {contactos.map((contacto) => (
                        <tr key={contacto.id} className="hover:bg-gray-100">
                            <td className="py-4 px-6 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{contacto.id.split("-")[0]}</div>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{contacto.nombre}</div>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{contacto.numero}</div>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{contacto.sexo}</div>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{calculateAge(contacto.cumpleaños)}</div>
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap">
                                <img
                                    src={contacto.imagen}
                                    alt={contacto.nombre}
                                    className="w-10 h-10 rounded-full"
                                />
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap text-center">
                                <button
                                    onClick={() => setCurrentContact(contacto)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mr-2"
                                >
                                    Modificar
                                </button>
                                <button
                                    onClick={() => handleDelete(contacto.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Validación de PropTypes
TablaContactos.propTypes = {
    contactos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            nombre: PropTypes.string.isRequired,
            numero: PropTypes.string.isRequired,
            sexo: PropTypes.string.isRequired,
            cumpleaños: PropTypes.string.isRequired,
            imagen: PropTypes.string
        })
    ).isRequired,
    dispatch: PropTypes.func.isRequired,
    setCurrentContact: PropTypes.func.isRequired
};

export default TablaContactos
