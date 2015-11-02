'use strict';

// Declare app level module which depends on views, and components
angular.module('duskyStar', [
  'ngRoute',
  'duskyStar.view1',
  'duskyStar.view2',
  'duskyStar.version',
  'duskyStar.postFactory'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
