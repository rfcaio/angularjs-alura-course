
(function () {
  'use strict';

  angular
    .module('app.photo')
    .service('PhotoService', PhotoService);

  function PhotoService ($http) {
    var URL = 'https://jsonplaceholder.typicode.com/photos';

    this.create = function create (photo) {
      return $http.post(URL, photo);
    };

    this.getAll = function getAll () {
      return $http.get(URL);
    };

    this.getById = function getById (id) {
      return $http.get(URL + '/' + id);
    };

    this.remove = function remove (id) {
      return $http.delete(URL + '/' + id);
    };

    this.update = function update (id, photo) {
      return $http.put(URL + '/' + id, photo);
    };
  }

  PhotoService.$inject = ['$http'];
}());
