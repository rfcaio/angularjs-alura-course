
describe('panelDirective', function () {
  'use strict';

  var $compile = null;
  var $rootScope = null;

  beforeEach(function () {
    angular.mock.module('app.layout.panel');
    angular.mock.inject(function ($injector) {
      $compile = $injector.get('$compile');
      $rootScope = $injector.get('$rootScope');
    });
  });

  it('should render `title` property', function () {
    var element = $compile('<panel title="A simple image"></panel>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('A simple image');
  });

  it('should render transcluded content', function () {
    var element = $compile('<panel>Transcluded content</panel>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('Transcluded content');
  });
});
