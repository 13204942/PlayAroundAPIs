'use strict';

/**
 * @ngdoc function
 * @name newsweatherApp.controller:NewscontrollerCtrl
 * @description
 * # NewscontrollerCtrl
 * Controller of the newsweatherApp
 */
angular.module('newsweatherApp')
  .controller('newsController', ['$scope', 'newsService', '$route', 
  	function($scope, newsService, $route) {
  		
  	var promise = newsService.GetNews();
    promise.then(function(data) {
        $scope.newsResult = data;
    });
    
    $scope.refresh = function() {
        $route.reload();
    };
  }]);
