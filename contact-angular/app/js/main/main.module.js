var angular =   require('angular');
                require('./components/contacts.component.js');
                require('./services/contacts.service.js');

module.exports = angular.module("mainModule", [
    // components
    'mainModule.contactsComponent',
    // services
    'mainModule.contactsService'
]);