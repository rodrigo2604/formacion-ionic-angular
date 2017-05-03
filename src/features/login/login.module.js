import route from './login.route';
import Controller from './login.controller';
import Service from './login.service';

export default angular
    .module('formacion.login',
    [
        'ui.router'
    ])
    .config(route)
    .controller('LoginController', Controller)
    .service('LoginService', Service)
    .name;