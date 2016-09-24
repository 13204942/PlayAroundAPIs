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
    
    .when('/news', {
        templateUrl: 'pages/news.htm',
        controller: 'newsController'
    })
		
		.when('/jokes', {
        templateUrl: 'pages/jokes.htm',
        controller: 'jokesController'
    })
    
});