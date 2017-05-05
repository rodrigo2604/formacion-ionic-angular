export default function HomeService($log, $http, CONSTANTS) {
    'ngInject';

    return {
        getAnnounces: _getAnnounces,
        like: _like
    }

    function _getAnnounces() {
        return $http.get(`${CONSTANTS.API_URL}/private/announces`)
            .then(res => res.data)
            .catch(err => $log.error(err))
    }

    function _like() {

    }
}