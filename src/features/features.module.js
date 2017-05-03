import login from './login/login.module';
import home from './home/home.module';
import tareas from './tareas/tareas.module';

export default angular
    .module('formacion.features', [
        login,
        home,
        tareas
    ])
    .name;