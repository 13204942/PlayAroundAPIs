'use strict';

/**
 * @ngdoc directive
 * @name newsweatherApp.directive:jokeView
 * @description
 * # jokeView
 */
angular.module('newsweatherApp')
  .directive('jokeView', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/jokeView.html',
        replace: true,
        scope: {
            jokeDetail: "="
        }
    };
  });
