import momentFilter from './momentFilter.js';

export default angular
    .module('core.filters', [

    ])
    .filter('momentFormat', momentFilter)
    .name;