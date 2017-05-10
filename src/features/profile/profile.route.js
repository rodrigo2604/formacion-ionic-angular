export default function profileConfig($stateProvider) {
    'ngInject'
    $stateProvider
        .state('profile', {
            parent: 'formacion',
            url: '/profile',
            cache: false,
            views: {
                "menuContent": {
                    templateUrl: "src/features/profile/profile.template.html",
                    controller: 'ProfileController as vm'
                }
            },
        })
}