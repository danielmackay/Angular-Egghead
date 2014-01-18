var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.leaveVoicemail = function(number, message) {
        alert("Number: " + number + " said: " + message);
    };
});
app.directive("phone", function() {
    return {
        restrict: "E",
        scope: {
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template: '<div class="panel panel-default panel-body">Number: {{number}} Network:<select class="form-control" ng-model="network" ng-options="net for net in networks"></select>' +
            '<input class="form-control" type="text" ng-model="value">' +
            '<div class="btn btn-primary" ng-click="makeCall({number: number, message: value})">Call Home!</div></div>',
        link: function(scope) {
            scope.networks = ["Vodafone", "Virgin", "Telstra", "Optus"];
            scope.network = scope.networks[0];
        }        
    };
});