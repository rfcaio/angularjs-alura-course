
module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app.js',
      'src/photo/photo.module.js',
      'src/photo/photo.controller.js',
      'spec/photo/photo.controller.spec.js'
    ],
    frameworks: ['jasmine']
  });
};
