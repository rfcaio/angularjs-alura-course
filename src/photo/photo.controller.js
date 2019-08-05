
(function () {
  'use strict';

  angular
    .module('app.photo')
    .controller('PhotoController', PhotoController);

  function PhotoController (PhotoService) {
    var vm = this;

    vm.filter = '';
    vm.message = '';

    vm.$onInit = function $onInit () {
      PhotoService.getAll()
        .then(function (response) {
          vm.photos = response.data.slice(0, 10);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    vm.deletePhoto = function deletePhoto (id) {
      PhotoService.remove(id)
        .then(function () {
          vm.message = 'Deleted.';
          vm.photos = vm.photos.filter(function (photo) {
            return photo.id !== id;
          });
        })
        .catch(function () {
          vm.message = 'Could not delete photo.';
        });
    };

    vm.$onInit();
  }

  PhotoController.$inject = ['PhotoService'];
}());
