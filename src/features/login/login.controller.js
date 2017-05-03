export default function LoginController($http, $state, LoginService) {
    'ngInject';
    var vm = this;

    vm.login = _login;
    vm.goToRegister = _goToRegister;

    function _login() {
        LoginService
            .login(vm.username, vm.password)
            .then((user) => {
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