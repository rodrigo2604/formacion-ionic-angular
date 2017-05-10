import route from './profile.route';
import Controller from './profile.controller';

export default angular
    .module('formacion.profile',
    [
        'ui.router'
    ])
    .config(route)
    .controller('ProfileController', Controller)
    .name;