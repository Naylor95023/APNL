(function () {
    'use strict';
    angular.module('apnl').controller('StudentsHonorCtrl', StudentsHonorCtrl);

    StudentsHonorCtrl.$inject = ['honor'];
    function StudentsHonorCtrl(honor) {
        var vm = this;
        vm.honor = honor;

        activate();

        function activate() {
            console.log("StudentsHonorCtrl loaded");
        }
    }
})();
