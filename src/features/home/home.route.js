export default function HomeConfig($stateProvider) {
    'ngInject'
    $stateProvider
        .state('home', {
            parent: 'formacion',
            url: '/home',
            cache: false,
            views: {
                "menuContent": {
                    templateUrl: "src/features/home/home.template.html",
                    controller: 'HomeController as vm'
                }
            }
        })
}