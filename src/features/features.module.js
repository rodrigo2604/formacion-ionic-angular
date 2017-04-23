import home from './home/home.module';
import tareas from './tareas/tareas.module';

export default angular
    .module('formacion.features', [
        home,
        tareas
    ])
    .name;