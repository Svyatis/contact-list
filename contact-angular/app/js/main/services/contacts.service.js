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

    /**
     * @name function getContacts
     * @desc sends request for all contacts
     */
    this.getContacts = function() {
        return $resource(API_URL + 'contact')
    };

    /**
     * @name function getContacts
     * @desc get one contact by id
     * @param id
     */
    this.getDetail = function(id) {
        return $resource(API_URL + 'contact/' + id);
    };

    /**
     * @name function getContacts
     * @desc create new contact
     * @param params
     */
    this.sendContact = function(params) {
        return $resource(API_URL + 'add-contact', params, {post: {method: "POST"}})
    };

    /**
     * @name function getContacts
     * @desc update contact
     * @param params
     * @param id
     */
    this.updateContact = function(params, id) {
        return $resource(API_URL + 'update-contact/' + id, params, {post: {method: "POST"}})
    }
}