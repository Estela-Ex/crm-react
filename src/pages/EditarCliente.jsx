import {obtenerCliente} from '../data/clientes'


export async function loader({ params }) {
    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new response('', {
            status: 404,
            statusText: 'Cliente no encontrado'
        })
    }
    return cliente
    
}

export default function EditarCliente() {
    return (
        <div>
            EditarCliente
        </div>
    )
}