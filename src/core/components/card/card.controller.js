class Card {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }

    $onChanges(changes){
        this.$log.log(changes.text);
    }

    $onInit() {
        this.$log.log('Se inicia el componente card');
    }

    $onDestroy() {
        this.$log.log('Se destruye componente card');
    }
}

export default Card;