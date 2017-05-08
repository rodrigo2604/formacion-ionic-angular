export default function HomeController($scope, $state, StorageService, HomeService) {
    'ngInject';

    var vm = this;

    vm.skip = 0;
    vm.moreData = true;
    vm.announces = [];

    vm.logout = _logout;
    vm.goTareas = _goTareas;
    vm.changeText = _changeText;
    vm.doRefresh = _doRefresh;
    vm.getAnnounces = _getAnnounces;
    vm.getMyAnnounces = _getMyAnnounces;
    vm.loadMore = _loadMore;

    init();

    function init() {
        vm.username = StorageService.get('userProfile').username;
        _getMyAnnounces();
    }

    function _getAnnounces() {
        HomeService.getAnnounces(vm.skip)
            .then(announces => vm.announces = announces);
    }

    function _getMyAnnounces() {
        HomeService.getMyAnnounces()
            .then(myAnnounces => vm.myAnnounces = myAnnounces);
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

    function _loadMore() {
        vm.skip = vm.announces.length;
        HomeService.getAnnounces(vm.skip)
            .then(announces => {
                if (announces.length !== 0) {
                    vm.announces.push(...announces);
                } else {
                    vm.moreData = false;
                }
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
    }

}