
module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app.js',
      'src/layout/layout.module.js',
      'src/layout/panel/panel.module.js',
      'src/layout/panel/panel.directive.js',
      'src/layout/panel/panel.directive.spec.js',
      'src/photo/photo.module.js',
      'src/photo/photo.controller.js',
      'src/photo/photo.controller.spec.js',
      'src/photo/photo.service.js',
      'src/photo/photo.service.spec.js',
      'src/photo/photo-create.controller.js',
      'src/photo/photo-create.controller.spec.js',
      'src/photo/photo-update.controller.js',
      'src/photo/photo-update.controller.spec.js'
    ],
    frameworks: ['jasmine']
  });
};
