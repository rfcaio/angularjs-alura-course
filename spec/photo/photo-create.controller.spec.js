
describe('PhotoCreateController', function () {
  'use strict';

  var $httpBackend = null;
  var PhotoCreateController = null;

  beforeEach(function () {
    angular.mock.module('app.photo');
    angular.mock.inject(function ($controller, $injector) {
      $httpBackend = $injector.get('$httpBackend');
      PhotoCreateController = $controller('PhotoCreateController');
    });
  });

  it('should init `message` property as an empty string', function () {
    expect(PhotoCreateController.message).toEqual('');
  });

  it('should init `photo` property', function () {
    expect(PhotoCreateController.photo).toEqual({ title: '', url: '' });
  });

  describe('createPhoto', function () {
    it('should define `message` property as `Created.` if the request is made successfully', function () {
      $httpBackend.expect('POST', 'https://jsonplaceholder.typicode.com/photos').respond(201);
      PhotoCreateController.photo = { title: 'A photo', url: '/path/to/photo/' };
      expect(PhotoCreateController.message).toEqual('');
      PhotoCreateController.createPhoto();
      $httpBackend.flush();
      expect(PhotoCreateController.message).toEqual('Created.');
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should restart `photo` property if the request is made successfully', function () {
      $httpBackend.expect('POST', 'https://jsonplaceholder.typicode.com/photos').respond(201);
      PhotoCreateController.photo = { title: 'A photo', url: '/path/to/photo/' };
      PhotoCreateController.createPhoto();
      $httpBackend.flush();
      expect(PhotoCreateController.photo).toEqual({ title: '', url: '' });
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should define `message` property as `Could not create photo.` if the request is not made successfully', function () {
      $httpBackend.expect('POST', 'https://jsonplaceholder.typicode.com/photos').respond(500);
      PhotoCreateController.photo = { title: 'A photo', url: '/path/to/photo/' };
      expect(PhotoCreateController.message).toEqual('');
      PhotoCreateController.createPhoto();
      $httpBackend.flush();
      expect(PhotoCreateController.message).toEqual('Could not create photo.');
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});
