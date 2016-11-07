'use strict';

/**
 * @ngdoc directive
 * @name newsweatherApp.directive:newsView
 * @description
 * # newsView
 */
angular.module('newsweatherApp')
  .directive('newsView', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/newsView.html',
        replace: true,
        scope: {
            newsDetail: '='
        }
    };
  });
