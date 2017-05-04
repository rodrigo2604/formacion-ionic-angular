export default function StorageService() {
    this.get = _get;
    this.set = _set;
    this.remove = _remove;

    function _set(key, value) {
        localStorage.setItem(key, btoa(JSON.stringify(value)));
    }

    function _get(key) {
        var _retrieved = localStorage.getItem(key) !== null
            ? JSON.parse(atob(localStorage.getItem(key)))
            : undefined;
        return _retrieved;
    }

    function _remove(key) {
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key);
        }
    }
}