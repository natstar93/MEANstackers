'use strict';

angular.module('duskyStar.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as v1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

  var self = this;

  self.test = "helwdwlo worlasdd";

  self.posts = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5'
  ];

}]);