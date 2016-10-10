'use strict';

/**
 * @ngdoc function
 * @name newsweatherApp.controller:SearchcontrollerCtrl
 * @description
 * # SearchcontrollerCtrl
 * Controller of the newsweatherApp
 */
angular.module('newsweatherApp')
  .controller('searchController', ['$scope', '$location', 'cityService', 
  	function($scope, $location, cityService) {
  		
  	$scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        
        cityService.city = $scope.city;
        
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };
  }]);
