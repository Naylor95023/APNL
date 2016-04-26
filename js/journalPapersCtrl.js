(function () {
    'use strict';
    angular.module('apnl').controller('JournalPapersCtrl', JournalPapersCtrl);

    JournalPapersCtrl.$inject = ['journalPapers'];
    function JournalPapersCtrl(journalPapers) {
        var vm = this;
        vm.journalPapers = journalPapers;

        activate();

        function activate() {
            console.log("JournalPapersCtrl loaded");
        }
    }
})();
