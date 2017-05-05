export default function HomeController($state, StorageService) {
    'ngInject';

    var vm = this;

    vm.logout = _logout;
    vm.goTareas = _goTareas;

    init();

    function init() {
        vm.username = StorageService.get('userProfile').username;
        vm.text = 'Este texto es bindeado desde la home al componente card!'
    }

    function _logout(){
        StorageService.remove('userProfile');
        $state.go('login');
    }

    function _goTareas() {
        $state.go('tareas');
    }

}