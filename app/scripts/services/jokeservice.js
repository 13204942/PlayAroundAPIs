'use strict';

/**
 * @ngdoc service
 * @name newsweatherApp.jokeService
 * @description
 * # jokeService
 * Service in the newsweatherApp.
 */
angular.module('newsweatherApp')
  .service('jokeService', ['$resource', function($resource) {

	this.GetJokes = function() {
    var jokeAPI = $resource("http://api.icndb.com/jokes/random/10", {
    callback: "JSON_CALLBACK" }, {get: { method: "JSONP"}});

    return jokeAPI.get(); 
    };
  }]);
