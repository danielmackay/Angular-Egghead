/// <reference path="../scripts/angular.min.js" />
var app = angular.module("superhero", []);

app.directive("superman", function() {
    return {
        /* A: Attribute
         * E: Element
         * C: Class
         * M: Comment */
        restrict: "A",
        link: function() {
            alert("I'm working stronger");
        }
    };
});

app.directive("flash", function() {
    return {
        restrict: "A",
        link: function() {
            alert("I'm working faster");
        }
    };
});