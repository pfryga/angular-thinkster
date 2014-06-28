'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('PostsCtrl', function ($scope, $location, Post) {
  	$scope.posts = {};
    $scope.post = {
    	url: 'http://',
    	title: ''
    };

    Post.get( function(response) {
    	$scope.posts = response;
    });
    $scope.deletePost = function (postId) {
    	Post.delete({
    		id: postId
    	}, function () {
    		delete $scope.posts[postId];
    	});
    };
  });
