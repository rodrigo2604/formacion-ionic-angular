// ionic starter App
import config from './app.config';
import route from './app.route';


import '../core/core.module';
import '../features/features.module';

angular.module('formacion', [
  'ionic',
  'core',
  'formacion.features'
])
  .config(route)
  .config(config)
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
