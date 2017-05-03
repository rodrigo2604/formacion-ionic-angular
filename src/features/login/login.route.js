export default function LoginConfig($stateProvider) {
    'ngInject'
    $stateProvider
        .state('login', {
            url: '/login',
            cache: false,
            templateUrl: "src/features/login/login.template.html",
            controller: 'LoginController as vm'
        })
}