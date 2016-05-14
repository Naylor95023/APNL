(function () {
    'use strict';
    angular.module('apnl').controller('ProfessorHonorCtrl', ProfessorHonorCtrl);

    ProfessorHonorCtrl.$inject = ['honor'];
    function ProfessorHonorCtrl(honor) {
        var vm = this;
        vm.honor = honor;

        activate();

        function activate() {
            console.log("ProfessorHonorCtrl loaded");
        }
    }
})();
