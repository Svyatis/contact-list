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
     * @param $location
     * @param moment
     * @memberOf mainModule
     */
    function ContactCtrl(ContactsService, $location, moment) {
        var $ctrl = this;
        $ctrl.items = [];

        /**
         * @desc request for all contacts
         * @memberOf ContactCtrl
         */
        ContactsService.getContacts().get().$promise.then(function (data) {
            $ctrl.contacts = data.allContacts;
        });

        /**
         * @name function go
         * @desc redirects to detailed contact page when click on contact
         * @memberOf ContactCtrl
         */
        $ctrl.go = function(contact) {
            var hash = '/contact/' + contact.id;
            $location.path(hash);
        };

        /**
         * @name function checkDate
         * @desc function for birthday reminder compares dates of birth with current date
         * @memberOf ContactCtrl
         */
        $ctrl.checkDate = function(date, id) {
            $ctrl.birthday = date.substring(5);
            $ctrl.current = $ctrl.filterDate($ctrl.current, 0);
            $ctrl.plusFiveDays = $ctrl.filterDate($ctrl.plusFiveDays, 5);
            $ctrl.plusTenDays = $ctrl.filterDate($ctrl.plusTenDays, 10);
            if ($ctrl.birthday >= $ctrl.current && $ctrl.birthday <= $ctrl.plusFiveDays) {
                $(document).ready(function(){
                    $("#el"+id).attr("class", "danger");
                });
            } else if ($ctrl.birthday > $ctrl.plusFiveDays && $ctrl.birthday <= $ctrl.plusTenDays) {
                $(document).ready(function(){
                    $("#el"+id).attr("class", "warning");
                });
            }

        };

        /**
         * @name function filterDate
         * @desc create and format dates for comparing
         * @memberOf ContactCtrl
         */
        $ctrl.filterDate = function(data, plusDays) {
            data = new Date();
            data.setDate(data.getDate() + plusDays);
            data = moment(data).format('YYYY-MM-DD');
            data = data.substring(5);
            return data;
        }
    }
