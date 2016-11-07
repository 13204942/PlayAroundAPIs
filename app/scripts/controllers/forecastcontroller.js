'use strict';

/**
 * @ngdoc function
 * @name newsweatherApp.controller:ForecastcontrollerCtrl
 * @description
 * # ForecastcontrollerCtrl
 * Controller of the newsweatherApp
 */
angular.module('newsweatherApp')
  .controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', 
  	function($scope, $routeParams, cityService, weatherService){
  	$scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
//    $scope.convertToFahrenheit = function(degk) {
//        
//        return Math.round((1.8 * (degk - 273)) + 32);
//        
//    }
    
    $scope.convertToDate = function(dt) {
        
        return new Date(dt * 1000);
        
    };
  }]);
