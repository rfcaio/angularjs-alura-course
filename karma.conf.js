
module.exports = function (config) {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: ['Chrome'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'spec/app.spec.js',
      'src/app.js'
    ],
    frameworks: ['jasmine']
  });
};
