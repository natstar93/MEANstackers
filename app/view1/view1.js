'use strict';

angular.module('duskyStar.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as v1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

  var self = this;

  this.test = "hello world";

}]);