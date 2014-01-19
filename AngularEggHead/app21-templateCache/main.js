var app = angular.module("zippyApp", []);

app.run(function ($templateCache) {
    $templateCache.put("zippy.html",
        '<div>' +
            '<h3 ng-click="toggleContent()">{{title}}</h3>' +
            '<div ng-show="isContentVisible" ng-transclude>Hello world!</div>' +
            '</div>'
    );
});

app.directive("zippy", function ($templateCache) {
    console.log($templateCache.get("zippy.html"));
    return {
        restrict: "E",
        scope: {
            title: "@"
        },
        link: function (scope) {
            scope.isContentVisible = false;

            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            };
        },
        transclude: true,
        // templateUrl is a shorthand for this
        //template: $templateCache.get("zippy.html")
        templateUrl: 'zippy.html'
    };
});

