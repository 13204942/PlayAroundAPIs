'use strict';

/**
 * @ngdoc function
 * @name newsweatherApp.controller:JokescontrollerCtrl
 * @description
 * # JokescontrollerCtrl
 * Controller of the newsweatherApp
 */
angular.module('newsweatherApp')
  .controller('jokesController', ['$scope', 'jokeService', '$route', 
  	function($scope, jokeService, $route){

  	$scope.jokesResult = jokeService.GetJokes();
    console.log($scope.jokesResult);
	
    $scope.refresh = function() {
        $route.reload();
    };
  }]);
