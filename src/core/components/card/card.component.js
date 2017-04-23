import controller from './card.controller';

const componente = {
    controller,
    templateUrl: 'src/core/components/card/card.template.html',
    bindings: {
        text: '<'
    }
};

export default componente;