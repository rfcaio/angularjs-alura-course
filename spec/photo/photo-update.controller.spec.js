
describe('PhotoUpdateController', function () {
  'use strict';

  var $httpBackend = null;
  var PhotoUpdateController = null;
  var photo = { title: 'Some photo', url: 'http://some/photo' };

  beforeEach(function () {
    angular.mock.module('app.photo');
    angular.mock.inject(function ($controller, $injector) {
      $httpBackend = $injector.get('$httpBackend');
      PhotoUpdateController = $controller('PhotoUpdateController', { $routeParams: { id: '2' } });
    });
  });

  it('should init `message` property as an empty string', function () {
    expect(PhotoUpdateController.message).toEqual('');
  });

  it('should init `photo` property', function () {
    expect(PhotoUpdateController.photo).toEqual({ title: '', url: '' });
  });

  describe('$onInit', function () {
    it('should fetch a photo', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos/2').respond(200, photo);
      expect(PhotoUpdateController.photo).toEqual({ title: '', url: '' });
      $httpBackend.flush();
      expect(PhotoUpdateController.photo).toEqual(photo);
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });

  describe('updatePhoto', function () {
    it('should define `message` property as `Updated.` if the request is made successfully', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos/2').respond(200, photo);
      $httpBackend.flush();
      $httpBackend.expect('PUT', 'https://jsonplaceholder.typicode.com/photos/2').respond(200);
      expect(PhotoUpdateController.message).toEqual('');
      PhotoUpdateController.updatePhoto();
      $httpBackend.flush();
      expect(PhotoUpdateController.message).toEqual('Updated.');
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should define `message` property as `Could not update photo.` if the request is not made successfully', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos/2').respond(200, photo);
      $httpBackend.flush();
      $httpBackend.expect('PUT', 'https://jsonplaceholder.typicode.com/photos/2').respond(500);
      expect(PhotoUpdateController.message).toEqual('');
      PhotoUpdateController.updatePhoto();
      $httpBackend.flush();
      expect(PhotoUpdateController.message).toEqual('Could not update photo.');
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});
