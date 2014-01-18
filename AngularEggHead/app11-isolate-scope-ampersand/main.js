var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.callHome = function(message) {
        alert(message);
    };
});
app.directive("phone", function() {
    return {
        scope: {
            dial: "&",
        },
        template: '<input class="form-control" type="text" ng-model="value">' +
            '<div class="btn btn-primary" ng-click="dial({message:value})">Call home!</div>'
    };
});
