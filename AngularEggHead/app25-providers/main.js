var app = angular.module("app", []);

app.controller("AppCtrl", function ($scope, game) {
  $scope.title = game.title;
});

// Method 1
//app.factory("game", function() {
//  return {
//    title: "StarCraft"
//  };
//});

// Method 2
app.provider("game", function() {
  var type;
  return {
    setType: function(value) {
      type = value;
    },
    $get: function() {
      return {
        title: type + "Craft"
      };
    }
  };
});

app.config(function(gameProvider) {
  gameProvider.setType("War");
});
