
(function () {
  'use strict';

  angular
    .module('app.photo')
    .controller('PhotoController', PhotoController);

  function PhotoController ($http) {
    var vm = this;

    vm.$onInit = function $onInit () {
      $http.get('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
          vm.photos = response.data.slice(0, 10);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }

  PhotoController.$inject = ['$http'];
}());
