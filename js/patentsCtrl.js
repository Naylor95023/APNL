(function () {
    'use strict';
    angular.module('apnl').controller('PatentsCtrl', PatentsCtrl);

    PatentsCtrl.$inject = ['patents'];
    function PatentsCtrl(patents) {
        console.log(patents);
        var vm = this;
        vm.patents = patents;

        activate();

        function activate() {
            console.log("PatentsCtrl loaded");
        }
    }
})();
