
(function () {
  'use strict';

  var PhotoController = function PhotoController () {
    var vm = this;

    vm.title = 'PhotoController';
  };

  angular
    .module('app.photo')
    .controller('PhotoController', PhotoController);
}());
