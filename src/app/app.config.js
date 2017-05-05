export default function ($ionicConfigProvider, $logProvider, $httpProvider) {
    'ngInject';

    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.icon('');
    $ionicConfigProvider.backButton.text('');

    $logProvider.debugEnabled(true);

    $httpProvider.interceptors.push('auth');
}