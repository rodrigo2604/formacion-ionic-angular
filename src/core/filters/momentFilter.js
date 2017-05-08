export default function momentFilter() {
    return function (input){
        return moment(input).locale('es').fromNow();
    }
}