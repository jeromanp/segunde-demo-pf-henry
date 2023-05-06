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
            // suspender instancia
        },
        preDeny: async () => {
            // eliminar instancia
        }
    })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Suspendido!',
                    text: `El ${instancia} deberá esperar.`,
                    icon: 'success',
                })
                setter(data.filter((elem) => elem.id !== id))
            } else if (result.isDenied) {
                Swal.fire({
                    title: 'Eliminado!',
                    text: `El ${instancia} fue borrado.`,
                    icon: 'success',
                })
                setter(data.filter((elem) => elem.id !== id))
            }
        })
}
