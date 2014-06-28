'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('NavCtrl', function ($scope, $location, Post) {
  	$scope.posts = {};
    $scope.post = {
    	url: 'http://',
    	title: ''
    };
    $scope.submitPost = function () {
    	Post.save($scope.post, function(ref) {
    		$scope.posts[ref.name] = $scope.post;
    		$scope.post = {
		    	url: 'http://',
		    	title: ''
		    };
		    $location.path('/posts/' + ref.name);
    	});
    };
  });
