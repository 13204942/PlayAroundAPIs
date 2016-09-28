// CONTROLLERS
weatherApp.controller('homeController', ['$scope', function($scope) {
	
}]);

weatherApp.controller('searchController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        
        cityService.city = $scope.city;
        
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
    
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
        
    }
    
}]);

weatherApp.controller('newsController', ['$scope', 'newsService', '$route', function($scope, newsService, $route) {
    
    var promise = newsService.GetNews();
    promise.then(function(data) {
        $scope.newsResult = data;
    });
    
    $scope.refresh = function() {
        $route.reload();
    };
    
}]);

weatherApp.controller('jokesController', ['$scope', 'jokeService', '$route', function($scope, jokeService, $route) {
    
    $scope.jokesResult = jokeService.GetJokes();
    console.log($scope.jokesResult);
	
    $scope.refresh = function() {
        $route.reload();
    };
    
}]);