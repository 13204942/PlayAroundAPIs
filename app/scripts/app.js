'use strict';

/**
 * @ngdoc overview
 * @name nesweatherApp
 * @description
 * # nesweatherApp
 *
 * Main module of the application.
 */
// MODULE
angular.module('newsweatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ]).config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })
		
	.when('/weather', {
        templateUrl: 'views/search.html',
        controller: 'searchController'
    })
    
    .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'views/forecast.html',
        controller: 'forecastController'
    })
    
    .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'newsController'
    })
		
	.when('/jokes', {
        templateUrl: 'views/jokes.html',
        controller: 'jokesController'
    });
});