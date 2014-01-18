var app = angular.module("phoneApp", []);

var controllers = {};
controllers.AppCtrl = function($scope) {
    this.sayHi = function() {
        alert("hi");
    };
    return $scope.AppCtrl = this;
};

var directives = {};
directives.panel = function() {
    return {
        restrict: "E"
    };
};


app.directive(directives);
app.controller(controllers);

