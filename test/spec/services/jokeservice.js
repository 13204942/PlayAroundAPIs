'use strict';

describe('Service: jokeService', function () {

  // load the service's module
  beforeEach(module('newsweatherApp'));

  // instantiate service
  var jokeService;
  beforeEach(inject(function (_jokeService_) {
    jokeService = _jokeService_;
  }));

  it('should do something', function () {
    expect(!!jokeService).toBe(true);
  });

});
