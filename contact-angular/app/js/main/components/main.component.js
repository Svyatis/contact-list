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
    function MainCtrl(ContactsService) {
        var $ctrl = this;

        $ctrl.removeRequest = function(contactData) {
            contactData.name = '';
            contactData.surname = '';
            contactData.phone = '';
            contactData.info = '';
            contactData.bday = '';
            return contactData;
        };

        $(document).ready(function() {
            var date = new Date();

            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;

            var today = year + "-" + month + "-" + day;
            $("#bday").attr("max", today);
        });

        $ctrl.addContact = function(contactData) {
            console.log(contactData);
            ContactsService.sendContact(contactData).post().$promise.then(function (response) {
                if (response.status === 200) {
                    alert('success');
                    // Notification.success({message: "<p style='padding: 20px'>Request has been submitted! " +
                    // "<a href='#' " + "class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
                    // "</p>", delay: 5000});
                }
                else {
                    alert(response);
                    // Notification.error({message: "<p style='padding: 20px'>" + response.error +
                    // "<a href='#' " + "class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
                    // "</p>", delay: 5000});
                }
            })
        }
    }