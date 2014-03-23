var app = angular.module("app", []);

app.config(function($logProvider) {
  // disables debug logging.  Set to true to re-enable.
  // similarly for info, warn, error
  $logProvider.debugEnabled(false);
})

app.run(function($rootScope, $log) {
  $rootScope.$log = $log;
})