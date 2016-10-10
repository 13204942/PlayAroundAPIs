'use strict';

/**
 * @ngdoc directive
 * @name newsweatherApp.directive:weatherReport
 * @description
 * # weatherReport
 */
angular.module('newsweatherApp')
  .directive('weatherReport', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/weatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToDate: "&",
            dateFormat: "@"
        }
    };
  });
