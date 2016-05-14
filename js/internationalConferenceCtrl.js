(function () {
    'use strict';
    angular.module('apnl').controller('InternationalConferenceCtrl', InternationalConferenceCtrl);

    InternationalConferenceCtrl.$inject = ['internationalPapers'];
    function InternationalConferenceCtrl(internationalPapers) {
        var vm = this;
        vm.internationalPapers = internationalPapers;

        activate();

        function activate() {
            console.log("InternationalConferenceCtrl loaded");
        }
    }
})();
