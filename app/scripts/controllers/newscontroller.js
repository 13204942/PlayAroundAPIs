'use strict';

/**
 * @ngdoc function
 * @name newsweatherApp.controller:NewscontrollerCtrl
 * @description
 * # NewscontrollerCtrl
 * Controller of the newsweatherApp
 */
angular.module('newsweatherApp')
  .controller('newsController', ['$scope', '$routeParams', 'newsService', 
  	function($scope, $routeParams, newsService) {
  	
    $scope.source = $routeParams.source || 'financial-times';

    newsService.GetNews($scope.source).then(function(data) {
      $scope.newsResult = data;
    });

    /*
    $scope.refresh = function() {
      $window.location.reload();
    };*/
  }]);
