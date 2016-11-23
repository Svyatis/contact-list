'use strict';

/**
 * Export contactsService
 */
module.exports = angular
    .module('mainModule.contactsService', ['ngResource'])
    .service('ContactsService', ContactsService);

/**
 * @name ContactsService
 * @desc service for requesting REST
 * @param $resource
 * @param API_URL
 */
function ContactsService($resource, API_URL) {

    this.getContacts = function() {
        return $resource(API_URL + 'contact')
    };

    this.sendContact = function(params) {
        return $resource(API_URL + 'add-contact', params, {post: {method: "POST"}})
    }
}