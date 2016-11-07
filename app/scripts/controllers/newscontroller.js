'use strict';

/**
 * @ngdoc function
 * @name newsweatherApp.controller:NewscontrollerCtrl
 * @description
 * # NewscontrollerCtrl
 * Controller of the newsweatherApp
 */
angular.module('newsweatherApp')
  .controller('newsController', ['$scope', 'newsService', '$window',  
  	function($scope, newsService, $window) {
  		
  	var promise = newsService.GetNews();
    promise.then(function(data) {
        $scope.newsResult = data;
    });
    
    $scope.refresh = function() {
        $window.location.reload();
    };
  }]);
