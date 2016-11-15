'use strict';

/**
 * @ngdoc service
 * @name newsweatherApp.newsService
 * @description
 * # newsService
 * Service in the newsweatherApp.
 */
angular.module('newsweatherApp')
  .service('newsService', ['$http', function($http) {
  	/*var deferred = $q.defer();*/
    
    this.GetNews = function(source) {
      /*
      $http.get('https://newsapi.org/v1/articles?source='+source+'&sortBy=top&apiKey=bc1b09b5f6924ee3951ea58355e17799').success(function(data) {
        deferred.resolve(data);
        console.log('here '+deferred.resolve(data));
      });
      console.log(deferred.promise);

      return deferred.promise;*/
      var promise = $http.get('https://newsapi.org/v1/articles?source='+source+'&sortBy=top&apiKey=bc1b09b5f6924ee3951ea58355e17799').then(function(response) {
        return response.data;
      });
      return promise;
    };
  }]);
