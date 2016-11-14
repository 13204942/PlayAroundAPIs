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

    /*var sourceUrl = function(source) {
      return 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=top&apiKey=bc1b09b5f6924ee3951ea58355e17799';
    };*/
    
    this.GetNews = function(source) {

      var sourceUrl = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=bc1b09b5f6924ee3951ea58355e17799';
      console.log(source);

      $http.get('https://newsapi.org/v1/articles?source='+source+'&sortBy=top&apiKey=bc1b09b5f6924ee3951ea58355e17799').success(function(data) {
        deferred.resolve(data);
      });
      console.log(deferred.promise);

      return deferred.promise;
    };
    
  }]);
