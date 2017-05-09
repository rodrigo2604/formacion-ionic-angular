export default function HomeService($log, $http, StorageService, CONSTANTS) {
    'ngInject';

    return {
        getAnnounces: _getAnnounces,
        getMyAnnounces: _getMyAnnounces,
        like: _like
    }

    function _getAnnounces(skip) {
        return $http.get(`${CONSTANTS.API_URL}/private/announces?skip=${skip}&limit=5`)
            .then(res => res.data);
    }

    function _getMyAnnounces() {
        let idUser = StorageService.get('userProfile')._id;
        return $http.get(`${CONSTANTS.API_URL}/private/announces?owner=${idUser}`)
            .then(res => res.data);
    }

    function _like() {

    }
}