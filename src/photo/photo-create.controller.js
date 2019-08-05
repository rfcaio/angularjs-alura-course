
(function () {
  'use strict';

  angular
    .module('app.photo')
    .controller('PhotoCreateController', PhotoCreateController);

  function PhotoCreateController (PhotoService) {
    var defaultPhoto = {
      title: '',
      url: ''
    };
    var vm = this;

    vm.message = '';
    vm.photo = Object.assign({}, defaultPhoto);

    vm.createPhoto = function createPhoto () {
      PhotoService.create(vm.photo)
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

  PhotoCreateController.$inject = ['PhotoService'];
}());
