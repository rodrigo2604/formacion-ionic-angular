export default function TareasConfig($stateProvider) {
    'ngInject'
    $stateProvider
        .state('tareas', {
            parent: 'formacion',
            url: '/tareas',
            cache: false,
            views: {
                "menuContent": {
                    templateUrl: "src/features/tareas/tareas.template.html",
                    controller: 'TareasController as vm'
                }
            },
        })
}