
describe('PhotoController', function () {
  'use strict';

  var $httpBackend = null;
  var PhotoController = null;

  beforeEach(function () {
    angular.mock.module('app.photo');
    angular.mock.inject(function ($controller, $injector) {
      $httpBackend = $injector.get('$httpBackend');
      PhotoController = $controller('PhotoController');
    });
  });

  it('should init `filter` property as an empty string', function () {
    expect(PhotoController.filter).toEqual('');
  });

  it('should init `message` property as an empty string', function () {
    expect(PhotoController.message).toEqual('');
  });

  describe('$onInit', function () {
    it('should fetch photos', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos').respond(200, [{ id: '1' }, { id: '2' }]);
      expect(PhotoController.photos).not.toBeDefined();
      $httpBackend.flush();
      expect(PhotoController.photos.length).toEqual(2);
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });

  describe('deletePhoto', function () {
    it('should delete a photo', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos').respond(200, [{ id: '1' }, { id: '2' }, { id: '3' }]);
      $httpBackend.flush();
      expect(PhotoController.photos.length).toEqual(3);
      $httpBackend.expect('DELETE', 'https://jsonplaceholder.typicode.com/photos/2').respond(204);
      PhotoController.deletePhoto('2');
      $httpBackend.flush();
      expect(PhotoController.photos).toEqual([{ id: '1' }, { id: '3' }]);
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should define `message` property as `Deleted.` if the request is made successfully', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos').respond(200, [{ id: '1' }, { id: '2' }, { id: '3' }]);
      $httpBackend.flush();
      expect(PhotoController.message).toEqual('');
      $httpBackend.expect('DELETE', 'https://jsonplaceholder.typicode.com/photos/2').respond(204);
      PhotoController.deletePhoto('2');
      $httpBackend.flush();
      expect(PhotoController.message).toEqual('Deleted.');
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should define `message` property as `Could not delete photo.` if the request is not made successfully', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos').respond(200, [{ id: '1' }, { id: '2' }, { id: '3' }]);
      $httpBackend.flush();
      expect(PhotoController.message).toEqual('');
      $httpBackend.expect('DELETE', 'https://jsonplaceholder.typicode.com/photos/2').respond(500);
      PhotoController.deletePhoto('2');
      $httpBackend.flush();
      expect(PhotoController.message).toEqual('Could not delete photo.');
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});
