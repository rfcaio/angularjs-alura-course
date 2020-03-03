
describe('PhotoService', function () {
  'use strict';

  var $http = null;
  var PhotoService = null;

  beforeEach(function () {
    angular.mock.module('app.photo');
    angular.mock.inject(function ($injector) {
      $http = $injector.get('$http');
      PhotoService = $injector.get('PhotoService');
      spyOn($http, 'delete');
      spyOn($http, 'get');
      spyOn($http, 'post');
      spyOn($http, 'put');
    });
  });

  describe('create', function () {
    it('should make a `POST` request to `https://jsonplaceholder.typicode.com/photos`', function () {
      var photo = { title: 'Some photo', url: 'http://some/photo' };
      PhotoService.create(photo);
      expect($http.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos', photo);
    });
  });

  describe('getAll', function () {
    it('should make a `GET` request to `https://jsonplaceholder.typicode.com/photos`', function () {
      PhotoService.getAll();
      expect($http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos');
    });
  });

  describe('getById', function () {
    it('should make a `GET` request to `https://jsonplaceholder.typicode.com/photos/1`', function () {
      PhotoService.getById(1);
      expect($http.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos/1');
    });
  });

  describe('remove', function () {
    it('should make a `DELETE` request to `https://jsonplaceholder.typicode.com/photos/1`', function () {
      PhotoService.remove(1);
      expect($http.delete).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos/1');
    });
  });

  describe('update', function () {
    it('should make a `PUT` request to `https://jsonplaceholder.typicode.com/photos/1`', function () {
      var photo = { title: 'Some photo', url: 'http://some/photo' };
      PhotoService.update(1, photo);
      expect($http.put).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/photos/1', photo);
    });
  });
});
