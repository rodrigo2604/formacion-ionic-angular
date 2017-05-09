export default function fileReadDirective() {
    return {
        restrict: 'A',
        scope: {
            fileRead: '='
        },
        link: function (scope, element) {
            element.bind('change', function (changeEvent) {
                var reader = new FileReader();
                reader.readAsDataURL(changeEvent.target.files[0]);
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileRead = {
                            name: changeEvent.target.files[0].name,
                            base64: loadEvent.target.result.split(',')[1]
                        };
                    });
                };
            });
        }
    };
}