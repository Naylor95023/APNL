(function () {
    'use strict';
    angular.module('apnl').controller('ResearchProjectsCtrl', ResearchProjectsCtrl);

    ResearchProjectsCtrl.$inject = ['researchProjects', 'amounts'];
    function ResearchProjectsCtrl(researchProjects, amounts) {
        var vm = this;
        vm.researchProjects = researchProjects;
        vm.amounts= amounts;

        activate();

        function activate() {
            console.log("ResearchProjectsCtrl loaded");
        }
    }
})();
