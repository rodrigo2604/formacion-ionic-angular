export default function SessionService() {
    return {
        getSession: _getSession,
        setSession: _setSession
    };

    function _getSession(key) {
        return sessionStorage.getItem(key);
    }

    function _setSession(key, data) {
        sessionStorage.setItem(key, data);
    }
}