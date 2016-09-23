// ROUTES
weatherApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
    .when('/photos', {
        templateUrl: 'pages/photos.htm',
        controller: 'photosController'
    })
		
		.when('/jokes', {
        templateUrl: 'pages/jokes.htm',
        controller: 'jokesController'
    })
    
});