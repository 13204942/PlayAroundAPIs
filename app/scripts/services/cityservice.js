'use strict';

/**
 * @ngdoc service
 * @name newsweatherApp.cityService
 * @description
 * # cityService
 * Service in the newsweatherApp.
 */
angular.module('newsweatherApp')
  .service('cityService', function () {
    this.city = 'Dublin, IE';
  });
