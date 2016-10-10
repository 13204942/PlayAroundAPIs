'use strict';

describe('Service: newsService', function () {

  // load the service's module
  beforeEach(module('newsweatherApp'));

  // instantiate service
  var newsService;
  beforeEach(inject(function (_newsService_) {
    newsService = _newsService_;
  }));

  it('should do something', function () {
    expect(!!newsService).toBe(true);
  });

});
