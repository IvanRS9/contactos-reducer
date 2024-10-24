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
    const [state, dispatch] = useReducer(ContactoReducer, [], init);
    const [formView, setFormView] = useState(false);
    const [currentContact, setCurrentContact] = useState(null); // Para el contacto a editar

    useEffect(() => {
        localStorage.setItem('contactos', JSON.stringify(state));
    }, [state]);

    return (
        <div className='container mt-3'>
            <button onClick={() => setFormView(!formView)}>
                {formView ? 'Ocultar Formulario' : 'Agregar Contacto'}
            </button>
            {formView && <Formulario dispatch={dispatch} currentContact={currentContact} setCurrentContact={setCurrentContact} />}
            <br /><br />
            <TablaContactos contactos={state} dispatch={dispatch} setCurrentContact={setCurrentContact} />
        </div>
    );
};


export default Contactos
