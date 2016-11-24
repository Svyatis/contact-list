var angular = require('angular');
    require('./main/main.module.js');
    require('@angular/router/angular1/angular_1_router');
    require('angular-resource');
    require('angular-ui-notification');
    require('angular-moment');

angular.module('app',
    [
        'mainModule',
        'ngComponentRouter',
        'ngResource',
        'ui-notification',
        'angularMoment'
    ])
    .config(function($locationProvider, NotificationProvider) {
        $locationProvider.html5Mode(true);

        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        })
    })
    .constant('API_URL', 'http://localhost:8000/api/')
    .value('$routerRootComponent', 'appMain');
