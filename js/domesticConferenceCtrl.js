(function () {
    'use strict';
    angular.module('apnl').controller('DomesticConferenceCtrl', DomesticConferenceCtrl);

    DomesticConferenceCtrl.$inject = ['domesticPapers'];
    function DomesticConferenceCtrl(domesticPapers) {
        var vm = this;
        vm.domesticPapers = domesticPapers;

        activate();

        function activate() {
            console.log("DomesticConferenceCtrl loaded");
        }
    }
})();
