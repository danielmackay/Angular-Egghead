var app = angular.module("phoneApp", []);

var phoneAppComponent = {};
phoneAppComponent.controllers = {};
phoneAppComponent.controllers.AppCtrl = function ($scope) {
    this.sayHi = function() {
        alert("hi");
    };
    return $scope.AppCtrl = this;
};

phoneAppComponent.directives = {};
phoneAppComponent.directives.panel = function () {
    return {
        restrict: "E"
    };
};


app.directive(phoneAppComponent.directives);
app.controller(phoneAppComponent.controllers);

// Note: this will not work for filters

