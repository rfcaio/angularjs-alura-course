
(function () {
  'use strict';

  angular
    .module('app.photo')
    .controller('PhotoUpdateController', PhotoUpdateController);

  function PhotoUpdateController ($http, $routeParams) {
    var vm = this;

    vm.message = '';
    vm.photo = {
      title: '',
      url: ''
    };

    vm.$onInit = function $onInit () {
      $http.get('https://jsonplaceholder.typicode.com/photos/' + $routeParams.id)
        .then(function (response) {
          var photo = response.data;
          vm.photo = {
            title: photo.title,
            url: photo.url
          };
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    vm.updatePhoto = function updatePhoto () {
      $http.put('https://jsonplaceholder.typicode.com/photos/' + $routeParams.id, vm.photo)
        .then(function () {
          vm.message = 'Updated.';
        })
        .catch(function () {
          vm.message = 'Could not update photo.';
        });
    };

    vm.$onInit();
  }

  PhotoUpdateController.$inject = ['$http', '$routeParams'];
}());
