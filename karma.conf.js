//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: [ 'PhantomJS'],

    plugins: [
      require( 'karma-jasmine' ),
      require( 'karma-phantomjs-launcher' ),
      require( 'karma-remap-istanbul' ),
      require( 'angular-cli/plugins/karma' )
    ]

  });
};
