
describe('PhotoController', function () {
  'use strict';

  var PhotoController = null;

  beforeEach(function () {
    angular.mock.module('app.photo');
    angular.mock.inject(function ($controller) {
      PhotoController = $controller('PhotoController');
    });
  });

  it('should have a property `title` equals to `PhotoController`', function () {
    expect(PhotoController.title).toEqual('PhotoController');
  });
});
