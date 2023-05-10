import axios from "axios";
import Swal from "sweetalert2";

/**
 * Recibe un string para lanzar una alerta y elegir la accion a tomar.
 *
 *
 * @param {String}   instancia           La instancia que se trata.
 * @param {Number}   id           El id de la instancia a borrar/suspender.
 * @param {Function}   setter           setState a ejecutar.
 * @param {Object}   data           Estado a filtrar con setState.
 * @param {String}   route           Ruta de la api (DELETE/PUT /api/${route}/${id}).
 */

export default function swalAction(instancia, id, setter, data, route) {
    // Para saber si la instancia es el o la
    let response = false;
    const articulo =
        instancia.slice(-1) === 'a'
            ? 'la'
            : 'el';

    // Lanza el swal principal
    Swal.fire({
        title: '¿Que acción querés tomar?',
        icon: 'question',
        allowEnterKey: false,
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: 'Suspender',
        confirmButtonAriaLabel: 'Suspender',
        denyButtonText: 'Eliminar',
        denyButtonAriaLabel: 'Eliminar',
        cancelButtonText: 'Ninguna',
        reverseButtons: true,
        preConfirm: async () => {
            // Suspensión de instancia
            try {
                // Envía un query 'true' para dar el toggle, no es explicitamente el valor de suspended
                response = await axios.put(`/api/${route}/${id}?suspend=true`);
            } catch (error) {
                Swal.fire('Nope', 'Ocurrió un error, intenta más tarde', 'error')
            }
        },
        preDeny: async () => {
            // Borrado logico de instancia
            try {
                response = await axios.delete(`/api/${route}/${id}`)
            } catch (error) {
                Swal.fire('Nope', 'Ocurrió un error, intenta más tarde', 'error')
            }
        }
    })
        // Si no fue cancelado, actua (pre👆) y responde con otro swal
        .then((result) => {
            if (!result.isDismissed && response) {
                Swal.fire(
                    'Listo!',
                    `Se ${result.isConfirmed ? 'suspendió' : 'borró'} ${articulo} ${instancia}.`,
                    'success',
                )
                // Borra esa instancia de la lista en index
                setter(data.filter((elem) => elem.id !== id))
            }
        })
}
