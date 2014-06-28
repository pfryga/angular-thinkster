'use strict';

/**
 * @ngdoc filter
 * @name newsApp.filter:hostnameFormUrl
 * @function
 * @description
 * # hostnameFormUrl
 * Filter in the newsApp.
 */
angular.module('newsApp')
  .filter('hostnameFormUrl', function () {
    return function (input) {
      var url = document.createElement('a');
	  url.href = input;
	  return url.hostname;
    };
  });
