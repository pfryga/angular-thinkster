'use strict';

/**
 * @ngdoc function
 * @name newsApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the newsApp
 */
angular.module('newsApp')
  .controller('PostCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
