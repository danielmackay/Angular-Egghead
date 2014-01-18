/// <reference path="../scripts/angular.min.js" />
var app = angular.module("app", []);

app.value("appTitle", "My Angular Application");

app.value('user', {
    staffId: 101,
    fullName: "Daniel Mackay",
    connectionName: "Elements",
    locale: "en-AU"
});

app.controller("TestCtrl", function ($scope, appTitle, user) {
    $scope.appTitle = appTitle;
    $scope.user = user;
    $scope.alert = function() {
        alert("alert from " + user.fullName);
    }
});
