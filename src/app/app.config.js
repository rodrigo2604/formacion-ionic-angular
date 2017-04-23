export default function ($ionicConfigProvider, $logProvider) {
    'ngInject';

    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.icon('');
    $ionicConfigProvider.backButton.text('');

    $logProvider.debugEnabled(true);
}