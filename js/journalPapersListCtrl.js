(function () {
    'use strict';
    angular.module('apnl').controller('JournalPapersListCtrl', JournalPapersListCtrl);

    JournalPapersListCtrl.$inject = ['journalPapersList'];
    function JournalPapersListCtrl(journalPapersList) {
        var vm = this;
        vm.journalPapersList = journalPapersList

        activate();

        function activate() {
            console.log("JournalPapersListCtrl loaded");
        }
    }
})();
