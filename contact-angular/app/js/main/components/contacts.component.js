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
    function ContactCtrl(ContactsService, $location) {
        var $ctrl = this;

        ContactsService.getContacts().get().$promise.then(function (data) {
            $ctrl.contacts = data.allContacts;
            console.log($ctrl.contacts);
        });

        $ctrl.go = function(contact) {
            var hash = '/contact/' + contact.id;
            $location.path(hash);
        };
    }
