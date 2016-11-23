var angular = require('angular');
    require('./main/main.module.js');
    require('@angular/router/angular1/angular_1_router');
    require('angular-resource');

angular.module('app',
    [
        'mainModule',
        'ngComponentRouter',
        'ngResource'
    ])
    .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
    })
    .constant('API_URL', 'http://localhost:8000/api/')
    .value('$routerRootComponent', 'appMain');
