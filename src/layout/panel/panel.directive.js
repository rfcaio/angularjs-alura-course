
(function () {
  'use strict';

  angular
    .module('app.layout.panel')
    .directive('panel', panelDirective);

  function panelDirective () {
    var template = [
      '<div class="panel">',
      '  <h1 class="panel-title">{{title}}</h1>',
      '  <div class="panel-body" ng-transclude></div>',
      '</div>'
    ];

    return {
      scope: {
        title: '@'
      },
      restrict: 'E',
      template: template.join(''),
      transclude: true
    };
  }
}());
