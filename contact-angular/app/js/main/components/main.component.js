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
                {path: '/contacts', name: 'Contacts', component: 'contactsComponent', useAsDefault: true}
            ]
    });

    /**
     * @name MainCtrl
     * @memberOf mainModule
     */
    function MainCtrl() {
        var $ctrl = this;

        $ctrl.removeRequest = function() {

        };

        $ctrl.sendRequest = function(contactData) {
            console.log(contactData);
        }
    }