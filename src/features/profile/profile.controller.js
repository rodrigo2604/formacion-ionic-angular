export default function ProfileController($scope, StorageService) {
    'ngInject';
    var vm = this;

    vm.userProfile = StorageService.get('userProfile') || {};

    vm.addPhoto = _addPhoto;

    function _addPhoto() {
        var srcType = Camera.PictureSourceType.CAMERA;
        var options = setOptions(srcType);

        navigator.camera.getPicture(function cameraSuccess(imageUri) {

            displayImage(imageUri);
            // You may choose to copy the picture, save it somewhere, or upload. 


        }, function cameraError(error) {
            console.debug("Unable to obtain picture: " + error, "app");

        }, options);
    }

    function setOptions(srcType) {
        var options = {
            // Some common settings are 20, 50, and 100 
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            // In this app, dynamically set the picture source, Camera or photo gallery 
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  // Corrects Android orientation quirks 
        }
        return options;
    }

    function displayImage(imgUri) {

        vm.userImage = 'data:image/jpeg;base64,' + imgUri;
        $scope.$apply();
    }
}