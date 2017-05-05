export default function LoginService($http, $q, SessionService, CONSTANTS) {
    'ngInject';
    return {
        login: _login
    };

    function _login(username, password) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: `${CONSTANTS.API_URL}/auth/login`,
            data: {
                username: username,
                password: password
            }
        })
            .then(function (res) {
                SessionService.setSession('token', res.data.token);
                deferred.resolve(res.data.user);
            })
            .catch(function (err) {
                deferred.reject(err.data);
            });

        return deferred.promise;
    }
}