
(function () {
  'use strict';

  angular
    .module('app')
    .config(['$locationProvider', '$routeProvider', function routeConfig ($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/photo', {
          controller: 'PhotoController',
          controllerAs: '$ctrl',
          templateUrl: 'src/photo/photo.html'
        })
        .when('/photo/create', {
          controller: 'PhotoCreateController',
          controllerAs: '$ctrl',
          templateUrl: 'src/photo/photo-create.html'
        })
        .otherwise({
          redirectTo: '/photo'
        });
    }]);
}());
