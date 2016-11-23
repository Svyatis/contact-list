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

function DetailCtrl(ContactsService) {
    var $ctrl = this;

    this.$routerOnActivate = function (next) {
        var id = next.params.id;

        ContactsService.getDetail(id).get().$promise.then(function (response) {
            $ctrl.contact = response.contactDetail;
            console.log($ctrl.contact);
        });
    }
}