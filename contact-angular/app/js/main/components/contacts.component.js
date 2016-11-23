'use strict';

/**
 * Export contactsComponent
 */
module.exports = angular
    .module('mainModule.contactsComponent', [])
    .component('contactsComponent', {
        templateUrl: 'app/js/main/components/contacts.template.html',
        controller: ContactCtrl
    });

    /**
     * @name ContactCtrl
     * @param ContactsService
     * @memberOf mainModule
     */
    function ContactCtrl(ContactsService) {
        var ctrl = this;

        ContactsService.getContacts().get().$promise.then(function (data) {
            ctrl.contacts = data.allContacts;
        });
    }
