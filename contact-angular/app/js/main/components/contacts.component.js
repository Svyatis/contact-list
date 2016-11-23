'use strict';

/**
 * Export contactsComponent
 */
module.exports = angular
    .module('mainModule.contactsComponent', ['ngResource'])
    .component('appMain', {
        template: '<h1>Main</h1><ng-outlet></ng-outlet>',
        controller: MainCtrl,
        transclude: true,
        $routeConfig:
          [
            {path: '/contacts', name: 'Contacts', component: 'contactsComponent', useAsDefault: true}
          ]
    })
    .component('contactsComponent', {
        templateUrl: 'app/js/main/components/contacts.template.html',
        controller: ContactCtrl
    });

    /**
     * @name MainCtrl
     * @memberOf mainModule
     */
    function MainCtrl(){
        //
    }

    /**
     * @name ContactCtrl
     * @param ContactsService
     * @memberOf mainModule
     */
    function ContactCtrl(ContactsService) {
        var ctrl = this;

        ContactsService.getContacts().get().$promise.then(function (data) {
            ctrl.contacts = data.allContacts;
            console.log(ctrl.contacts);
        });
    }
