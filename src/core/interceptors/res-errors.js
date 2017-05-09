export default function auth($q, $injector) {
    return {
        responseError: _responseError
    };

    function _responseError(res) {
        showAlert(setErrors(res.status).message, setErrors(res.status).fn);
        return $q.reject(res);
    }

    function setErrors(code) {
        let $state = $injector.get('$state');
        let errors = {
            400: {
                message: 'Error en usuario',
            },
            401: {
                message: 'Usuario no autorizado, por favor lóguese',
                fn: () => $state.go('login')
            },
            403: {
                message: 'No se puede visualizar, no tiene permisos',
                fn: () => $state.go('login')
            },
            404: {
                message: 'No se encontró el recurso que buscaba'
            },
            500: {
                message: 'Servidor no disponible temporalmente'
            },
            default: {
                message: 'Operativa no disponible'
            }
        }
        return errors[code] || errors['default'];
    }

    function showAlert(message, fn) {
        var $ionicPopup = $injector.get('$ionicPopup');
        var alertPopup = $ionicPopup.alert({
            title: 'Error',
            template: message
        });

        alertPopup.then(function (res) {
            fn();
        });
    }
}