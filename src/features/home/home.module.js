import route from './home.route';
import Controller from './home.controller';
import Service from './home.service';

export default angular
    .module('formacion.home',
    [
        'ui.router'
    ])
    .config(route)
    .controller('HomeController', Controller)
    .service('HomeService', Service)
    .name;