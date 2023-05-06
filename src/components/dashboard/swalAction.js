import Swal from "sweetalert2";

/**
 * Recibe un string para lanzar una alerta y elegir la accion a tomar.
 *
 *
 * @param {String}   instancia           La instancia que se trata.
 * @param {Number}   id           El id de la instancia a borrar/suspender.
 * @param {Function}   setter           setState a ejecutar.
 * @param {Object}   data           Estado a filtrar con setState.
 * @param {String}   route           Si no se pasa, se toma la instancia como ruta (POST/PUT /api/${route || instancia}).
 */

export default function swalAction(instancia, id, setter, data, route) {
    // Para saber si la instancia es el o la
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
            // suspende instancia
        },
        preDeny: async () => {
            // elimina instancia
        }
    })
    // Si no fue cancelado, actua (pre👆) y responde con otro swal
        .then((result) => {
            if (!result.isDismissed) {
                Swal.fire({
                    title: 'Listo!',
                    text: `Se ${result.isConfirmed ? 'suspendió' : 'borró'} ${articulo} ${instancia}.`,
                    icon: 'success',
                })
                // Borra esa instancia de la lista en index
                setter(data.filter((elem) => elem.id !== id))
            }
        })
}
