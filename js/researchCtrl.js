(function () {
    'use strict';
    angular.module('apnl').controller('ResearchCtrl', ResearchCtrl);

    ResearchCtrl.$inject = ['research'];
    function ResearchCtrl(research) {
        var vm = this;
        vm.research = research;

        activate();

        function activate() {
            console.log("ResearchCtrl loaded");
        }
    }
})();
