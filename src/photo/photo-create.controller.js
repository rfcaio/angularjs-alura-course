
(function () {
  'use strict';

  angular
    .module('app.photo')
    .controller('PhotoCreateController', PhotoCreateController);

  function PhotoCreateController ($http) {
    var defaultPhoto = {
      title: '',
      url: ''
    };
    var vm = this;

    vm.message = '';
    vm.photo = Object.assign({}, defaultPhoto);

    vm.createPhoto = function createPhoto () {
      $http.post('https://jsonplaceholder.typicode.com/photos', vm.photo)
        .then(function () {
          vm.message = 'Created.';
        })
        .then(restartForm)
        .catch(function () {
          vm.message = 'Could not create photo.';
        });
    };

    var restartForm = function restartForm () {
      vm.photo = Object.assign({}, defaultPhoto);
    };
  }

  PhotoCreateController.$inject = ['$http'];
}());
