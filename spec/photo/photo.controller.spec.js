
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

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should init `filter` property as an empty string', function () {
    expect(PhotoController.filter).toEqual('');
  });

  describe('$onInit', function () {
    it('should fetch photos', function () {
      $httpBackend.expect('GET', 'https://jsonplaceholder.typicode.com/photos').respond(200, [{ id: '1' }, { id: '2' }]);
      expect(PhotoController.photos).not.toBeDefined();
      PhotoController.$onInit();
      $httpBackend.flush();
      expect(PhotoController.photos.length).toEqual(2);
    });
  });
});
