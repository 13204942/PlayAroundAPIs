'use strict';

describe('Controller: HomecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('newsweatherApp'));

  var HomecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomecontrollerCtrl = $controller('HomecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HomecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
