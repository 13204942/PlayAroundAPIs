'use strict';

describe('Directive: category', function () {

  // load the directive's module
  beforeEach(module('newsweatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<category></category>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the category directive');
  }));
});
