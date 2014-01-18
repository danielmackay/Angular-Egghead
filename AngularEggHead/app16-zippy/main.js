var app = angular.module("zippyApp", []);

app.directive("zippy", function() {
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        link: function(scope) {
            scope.isContentVisible = false;
            
            scope.toggleContent = function() {
                scope.isContentVisible = !scope.isContentVisible;
            };
        },
        transclude: true,
        template:   '<div>' +
                    '<h3 ng-click="toggleContent()">{{title}}</h3>' +
                    '<div ng-show="isContentVisible" ng-transclude>Hello world!</div><' +
                    '/div>'
    };
});

