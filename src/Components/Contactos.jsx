import { useEffect, useReducer, useState } from 'react'
import TablaContactos from './TablaContactos'
import Formulario from './Formulario'
import { ContactoReducer } from '../Reducer/ContactoReducer';

const init = () => {
    // definir el localstorage
    const contactos = localStorage.getItem('contactos');
    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {
    // creacion de reducer
    const [state, dispatch] = useReducer(ContactoReducer, [], init);

    const [formView, setFormView] = useState(false);



    // Agregando un useEffect para guardar en el localstorage
    useEffect(() => {
        localStorage.setItem('contactos', JSON.stringify(state));
    }, [state]);

    return (
        <div className='container mt-3'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                onClick={() => setFormView(!formView)}>
                {formView ? 'Ocultar Formulario' : 'Agregar Contacto'}
            </button>
            {
                formView && <Formulario dispatch={dispatch} />
            }
            <br /><br />
            <TablaContactos contactos={state} dispatch={dispatch} />
        </div>
    )
}

export default Contactos
