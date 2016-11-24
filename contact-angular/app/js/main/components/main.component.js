'use strict';

/**
 * Export contactsComponent
 */
module.exports = angular
    .module('mainModule.mainComponent', [])
    .component('appMain', {
        templateUrl: 'app/js/main/components/main.template.html',
        controller: MainCtrl,
        transclude: true,
        $routeConfig:
            [
                {path: '/contacts', name: 'Contacts', component: 'contactsComponent', useAsDefault: true},
                {path: '/contact/:id', name: 'Detail', component: 'detailComponent'}
            ]
    });

    /**
     * @name MainCtrl
     * @memberOf mainModule
     */
    function MainCtrl(ContactsService, Notification, moment) {
        var $ctrl = this;

        /**
         * @name function removeRequest
         * @desc clearing modal form on cancel button click
         * @memberOf MainCtrl
         */
        $ctrl.removeRequest = function(contactData) {
            contactData.name = '';
            contactData.surname = '';
            contactData.phone = '';
            contactData.info = '';
            contactData.bday = '';
            return contactData;
        };

        /**
         * @name function changeMaxDate
         * @desc set max date of birth for adding contact validation
         * @memberOf MainCtrl
         */
        $ctrl.changeMaxDate = function() {
            $(document).ready(function () {
                var today = moment().format("YYYY-MM-DD");
                $("#bday").attr("max", today);
                console.log(today);
            });
        };

        /**
         * @name function addContact
         * @desc sends request to rest for creating new contact
         * @memberOf MainCtrl
         */
        $ctrl.addContact = function(contactData) {
            ContactsService.sendContact(contactData).post().$promise.then(function (response) {
                if (response.status === 200) {
                    Notification.success({message: "<p style='padding: 20px'>" +
                    "Contact has been successfully added to your contact list! " +
                    "<a href='#' " + "class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
                    "</p>", delay: 5000});
                }
                else {
                    Notification.error({message: "<p style='padding: 20px'>" + response.error +
                    "<a href='#' " + "class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
                    "</p>", delay: 5000});
                }
            })
        };
    }