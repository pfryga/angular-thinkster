'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('PostsCtrl', function ($scope, Post) {
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
    	});
    };
    $scope.deletePost = function (postId) {
    	Post.delete({
    		id: postId
    	}, function () {
    		delete $scope.posts[postId];
    		console.log('usunięto!');
    	});
    };
  });
