'use strict';

/**
 * @ngdoc directive
 * @name newsweatherApp.directive:category
 * @description
 * # category
 */
angular.module('newsweatherApp')
  .directive('category', function () {
    return {
    	restrict: 'E',
    	templateUrl: 'templates/categoryView.html'
    };
  });
