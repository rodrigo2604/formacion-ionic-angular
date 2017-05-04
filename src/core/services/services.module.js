import session from './session.js';
import storage from './storage.js';

export default angular
    .module('core.services', [

    ])
    .service('SessionService', session)
    .service('StorageService', storage)
    .name;