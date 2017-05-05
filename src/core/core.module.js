import components from './components/components.module';
import services from './services/services.module';
import interceptors from './interceptors/interceptors.module';
import filters from './filters/filters.module';

angular
    .module('core', [
        components,
        services,
        interceptors,
        filters
    ])
    .name;