export default function momentFilter() {
    return function (input){
        return moment(input).lang('es').fromNow();
    }
}