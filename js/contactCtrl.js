(function () {
    'use strict';
    angular.module('apnl').controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['professor'];
    function ContactCtrl(professor) {
        var vm = this;
        vm.officePhone = professor.officePhone;
        vm.laboratoryPhone = professor.laboratoryPhone;
        activate();

        function activate() {
            console.log("ContactCtrl loaded");
        }
    }
})();
