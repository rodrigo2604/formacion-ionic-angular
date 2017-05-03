export default function routeConfig($urlRouterProvider, $stateProvider) {
	'ngInject'
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('formacion', {
            abstract: true,
            cache: false,
            url: '/formacion',
            templateUrl: "src/app/app.template.html"
        });
}