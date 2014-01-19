/// <reference path="../scripts/angular.min.js" />
var app = angular.module("app", []);


//app.controller("MyCtrl", function ($scope, $http) {
//    console.log($http);
//});

// Protects against minification
app.controller("MyCtrl", ["$scope", "$http", function(myScope, myHttp) {
    console.log(myScope);
    console.log(myHttp);
}]);

app.directive("myDirective", function () {
    return {
        scope: {},
        link: function (element, scope, attrs) {
            console.log(element);
        }
    };
});
