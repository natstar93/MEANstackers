'use strict';

angular.module('duskyStar.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as v1Ctrl'
  });
}])

.controller('View1Ctrl', ['postFactory', function(postFactory) {

  var self = this;
  console.log(postFactory);

  self.test = "helwdwlo worlasdd";

  self.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];

  self.addPost = function() {
    if (!self.title || self.title === '') { return; }
    self.posts.push({
      title: self.title,
      link: self.link,
      upvotes: 0
    });
    self.title = '';
    self.link = '';
  };

  self.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}]);
