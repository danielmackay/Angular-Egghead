/// <reference path="../scripts/angular.min.js" />
var app = angular.module("app", []);

app.directive("dumbPassword", function () {
    // Store reference to the element so we don't have to find it later
    var validElement = angular.element('<div>{{model.input}}</div>');

    var link = function (scope) {
        scope.$watch("model.input", function (value) {
            if (value === "password") {
                validElement.toggleClass("alert alert-danger");
            }
        });
    };

    return {
        restrict: "E",
        replace: true,
        template:   '<div>' +
                    '<input type="text" ng-model="model.input">' +
                    '</div>',
        compile: function (tElem) {
            tElem.append(validElement);

            return link;
        }
    };
});

