export default function HomeController($scope, $state, StorageService, HomeService) {
    'ngInject';

    var vm = this;

    vm.logout = _logout;
    vm.goTareas = _goTareas;
    vm.changeText = _changeText;
    vm.doRefresh = _doRefresh;

    init();

    function init() {
        vm.username = StorageService.get('userProfile').username;
        HomeService.getAnnounces()
            .then(announces => vm.announces = announces);
    }

    function _logout() {
        StorageService.remove('userProfile');
        $state.go('login');
    }

    function _goTareas() {
        $state.go('tareas');
    }

    function _changeText(event) {
        vm.text = `${event.salute} ---> ${event.text}`;
    }

    function _doRefresh() {
        HomeService.getAnnounces()
            .then(announces => vm.announces = announces)
            .finally(() => $scope.$broadcast('scroll.refreshComplete'));
    }

}