// Validaciones automaticas con yargs
const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'

    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', opts)
    .command('actualizar', 'Actualizar el estado completado de una tarea', opts)
    .command('borrar', 'Borrar un elemento seleccionado', opts)
    .help()
    .argv;

module.exports = {
    argv
}