import components from './components/components.module';
import services from './services/services.module';

angular
    .module('core', [
        components,
        services
    ])
    .name;