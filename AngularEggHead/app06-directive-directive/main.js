﻿var app = angular.module("superApp", []);

app.directive("superhero", function() {
    return {
        restrict: "E",
        scope: {},
        // Controller is used to build an API for the other directives to use
        controller: function ($scope) {
            $scope.abilities = [];

            this.addStrength = function() {
                $scope.abilities.push("strength");
            };

            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            
            this.addFlight = function() {
                $scope.abilities.push("flight");
            };
        },
        link: function (scope, element) {
            element.addClass("btn btn-primary");
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    };
});

app.directive("strength", function() {
    return {
        require: "superhero",
        link: function(scope, element, attrs, superheroCtrl) {
            superheroCtrl.addStrength();
        }
    };
});
app.directive("speed", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addSpeed();
        }
    };
});
app.directive("flight", function () {
    return {
        require: "superhero",
        link: function (scope, element, attrs, superheroCtrl) {
            superheroCtrl.addFlight();
        }
    };
});

