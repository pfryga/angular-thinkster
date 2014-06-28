'use strict';

describe('Filter: hostnameFormUrl', function () {

  // load the filter's module
  beforeEach(module('newsApp'));

  // initialize a new instance of the filter before each test
  var hostnameFormUrl;
  beforeEach(inject(function ($filter) {
    hostnameFormUrl = $filter('hostnameFormUrl');
  }));

  it('should return the input prefixed with "hostnameFormUrl filter:"', function () {
    var text = 'angularjs';
    expect(hostnameFormUrl(text)).toBe('hostnameFormUrl filter: ' + text);
  });

});
