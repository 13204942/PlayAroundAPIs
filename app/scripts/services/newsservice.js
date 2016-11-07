'use strict';

/**
 * @ngdoc service
 * @name newsweatherApp.newsService
 * @description
 * # newsService
 * Service in the newsweatherApp.
 */
angular.module('newsweatherApp')
  .service('newsService', ['$http', '$q',function($http, $q) {
  	var deferred = $q.defer();
    
    var url = 'https://newsapi.org/v1/articles?source=financial-times&sortBy=top&apiKey=bc1b09b5f6924ee3951ea58355e17799';

    $http.get(url).success(function(data) {
        deferred.resolve(data);
    });
    
    this.GetNews = function() {
        return deferred.promise;
    };

    console.log(this.GetNews());
  }]);
