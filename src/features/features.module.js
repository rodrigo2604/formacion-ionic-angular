import login from './login/login.module';
import home from './home/home.module';
import profile from './profile/profile.module';

export default angular
    .module('formacion.features', [
        login,
        home,
        profile
    ])
    .name;