var angular =   require('angular');
                require('./components/main.component.js');
                require('./components/contacts.component.js');
                require('./services/contacts.service.js');

module.exports = angular.module("mainModule", [
    // components
    'mainModule.mainComponent',
    'mainModule.contactsComponent',
    // services
    'mainModule.contactsService'
]);