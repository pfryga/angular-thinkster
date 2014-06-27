'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('PostsCtrl', function ($scope) {
  	$scope.posts = [];
    $scope.post = {
    	url: 'http://',
    	title: ''
    };
    $scope.submitPost = function () {
    	$scope.posts.push($scope.post);
    	$scope.post = {
	    	url: 'http://',
	    	title: ''
	    };
    };
    $scope.deletePost = function (index) {
    	$scope.posts.splice(index, 1);
    };
  });
