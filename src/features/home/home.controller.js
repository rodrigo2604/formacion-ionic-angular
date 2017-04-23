export default function HomeController($state, $log){
    'ngInject';

    var vm = this;

    init();

    vm.goTareas = _goTareas;

    function _goTareas(){
        $state.go('tareas');
    }

    function init(){
        vm.name = 'Rodrigo';
        vm.text = 'Este texto es bindeado desde la home al componente card!'
    }
}