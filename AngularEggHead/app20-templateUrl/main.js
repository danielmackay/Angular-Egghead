var app = angular.module("zippyApp", []);

app.directive("zippy", function () {
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
        templateUrl: 'zippy.html'   
    };
});

