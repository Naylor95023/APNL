(function () {
    'use strict';
    angular.module('apnl').controller('ProfessorCtrl', ProfessorCtrl);

    ProfessorCtrl.$inject = ['professor'];
    function ProfessorCtrl(professor) {
        console.log("ProfessorCtrl loaded!");
        var vm = this;
        vm.professor = professor;
    }
})();
