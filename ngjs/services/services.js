//SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "Dublin, IE";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=62188c8b1b1f6bc5ed198a6dae7ed902", {
        callback: "JSON_CALLBACK" }, {get: { method: "JSONP"}});
    
        return weatherAPI.get({ q: city, cnt: days }); 
    };
}]);

weatherApp.service('jokeService', ['$resource', function($resource) {
    
    this.GetJokes = function() {
        var jokeAPI = $resource("http://api.icndb.com/jokes/random/10", {
        callback: "JSON_CALLBACK" }, {get: { method: "JSONP"}});
    
        return jokeAPI.get(); 
				console.log(jokeAPI.get());
    };
}]);