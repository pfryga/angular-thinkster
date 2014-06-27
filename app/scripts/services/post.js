'use strict';

/**
 * @ngdoc service
 * @name newsApp.Post
 * @description
 * # Post
 * Factory in the newsApp.
 */
angular.module('newsApp')
  .factory('Post', function ($resource) {
    return $resource('https://incandescent-fire-2144.firebaseio.com/posts/:id.json');
  });
