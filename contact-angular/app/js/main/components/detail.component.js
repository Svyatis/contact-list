'use strict';

/**
 * Export detailComponent
 */
module.exports = angular
    .module('mainModule.detailComponent', [])
.component('detailComponent', {
    templateUrl: 'app/js/main/components/detail.template.html',
    controller: DetailCtrl
});

/**
 * @name DetailCtrl
 * @memberOf detailComponent
 */
function DetailCtrl(ContactsService, Notification) {
    var $ctrl = this;
    $ctrl.editmode = false;

    /**
     * @name function toggle
     * @desc toggle buttons edit save onclick
     * @memberOf DetailCtrl
     */
    $ctrl.toggle = function () {
        $ctrl.editmode = !$ctrl.editmode;
    };

    /**
     * @name function $routerOnActivate
     * @desc getting id for request to rest for detailed info
     * @memberOf DetailCtrl
     */
    this.$routerOnActivate = function (next) {
        var id = next.params.id;

        ContactsService.getDetail(id).get().$promise.then(function (response) {
            $ctrl.contact = response.contactDetail;
        });

        /**
         * @name function save
         * @desc sending request to rest for updating contact
         * @param data array from update form
         * @memberOf DetailCtrl
         */
        $ctrl.save = function(data) {
            ContactsService.updateContact(data, id).post().$promise.then(function (response) {
                if (response.status === 200) {
                    Notification.success({message: "<p style='padding: 20px'>" +
                    "Contact was successfully updated " +
                    "<a href='#' " + "class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
                    "</p>", delay: 5000});
                    $ctrl.editmode = false;
                }
                else {
                    Notification.error({message: "<p style='padding: 20px'>" + response.error +
                    "<a href='#' " + "class='close' data-dismiss='alert' aria-label='close'>&times;</a>" +
                    "</p>", delay: 5000});
                }
            });
        }
    }
}