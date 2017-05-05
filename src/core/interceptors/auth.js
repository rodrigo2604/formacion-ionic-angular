export default function auth(SessionService) {
    return {
        request: _request
    };

    function _request(req) {
        var token = SessionService.getSession('token');
        if (token && req.url.indexOf('private') > -1) {
            req.headers.authorization = 'Bearer ' + token;
        }
        return req;
    }
}