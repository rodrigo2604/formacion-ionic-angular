import route from './tareas.route';
import Controller from './tareas.controller';

export default angular
    .module('formacion.tareas',
    [
        'ui.router'
    ])
    .config(route)
    .controller('TareasController', Controller)
    .name;