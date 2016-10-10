'use strict';

describe('Controller: ForecastcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('newsweatherApp'));

  var ForecastcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForecastcontrollerCtrl = $controller('ForecastcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForecastcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
