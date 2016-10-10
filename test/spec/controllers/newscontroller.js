'use strict';

describe('Controller: NewscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('newsweatherApp'));

  var NewscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewscontrollerCtrl = $controller('NewscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
