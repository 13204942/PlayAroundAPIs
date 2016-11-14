'use strict';

/**
 * @ngdoc directive
 * @name newsweatherApp.directive:categoryView
 * @description
 * # categoryView
 */
angular.module('newsweatherApp')
  .directive('category', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/categoryView.html',
        replace: true
    };
  });
