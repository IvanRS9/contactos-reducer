// reducer de contactos como funcion que recibe dos parametros, el estado y la accion

export const ContactoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            return state.filter(contacto => contacto.id !== action.payload)
        default:
            return state
    }
}