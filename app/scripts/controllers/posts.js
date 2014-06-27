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
    $scope.post = {
    	url: 'http://',
    	title: ''
    };
  });
