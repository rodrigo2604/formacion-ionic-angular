import route from './home.route';
import Controller from './home.controller';

export default angular
    .module('formacion.home',
    [
        'ui.router'
    ])
    .config(route)
    .controller('HomeController', Controller)
    .name;