'use strict';

/**
 * @ngdoc function
 * @name newsweatherApp.controller:NewscontrollerCtrl
 * @description
 * # NewscontrollerCtrl
 * Controller of the newsweatherApp
 */
angular.module('newsweatherApp')
  .controller('newsController', ['$scope', '$routeParams', 'newsService', '$window',  
  	function($scope, $routeParams, newsService, $window) {
  	
    $scope.source = $routeParams.source || 'financial-times';

  	var promise = newsService.GetNews($scope.source);

    promise.then(function(data) {
        $scope.newsResult = data;
    });
    
    $scope.refresh = function() {
        $window.location.reload();
    };
  }]);
