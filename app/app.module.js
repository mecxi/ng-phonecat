// Define the `phonecatApp` module
angular.module('phonecatApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    // ... which depends on the `phoneList` module
    'phoneList',
    // ... which depends on the phone-detail module
    'phoneDetail',
    'core',
    'test.module'
]);



