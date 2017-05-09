import auth from './auth.js';
import resErrors from './res-errors.js';

export default angular
    .module('core.interceptors', [

    ])
    .factory('auth', auth)
    .factory('resErrors', resErrors)
    .name;