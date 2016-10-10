'use strict';

describe('Controller: SearchcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('newsweatherApp'));

  var SearchcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchcontrollerCtrl = $controller('SearchcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
