export default function LoginController($http, $state, LoginService, StorageService) {
    'ngInject';
    var vm = this;

    vm.login = _login;
    vm.goToRegister = _goToRegister;

    init();

    function init() {
        if (StorageService.get('userCredentials')) {
            vm.isChecked = true;
            vm.username = StorageService.get('userCredentials').username;
            vm.password = StorageService.get('userCredentials').password;
        }
    }

    function _login() {
        LoginService
            .login(vm.username, vm.password)
            .then((user) => {
                if (vm.isChecked) {
                    StorageService.set('userCredentials', {
                        username: vm.username,
                        password: vm.password
                    });
                } else {
                    StorageService.remove('userCredentials');
                }
                StorageService.set('userProfile', user);
                $state.go('home');
            })
            .catch((reason) => {
                vm.reason = reason;
            });
    }

    function _goToRegister() {
        $state.go('register');
    }
}