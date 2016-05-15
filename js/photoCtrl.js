(function () {
    'use strict';
    angular.module('apnl').controller('PhotoCtrl', PhotoCtrl);

    PhotoCtrl.$inject = ['photo'];
    function PhotoCtrl(photo) {
        var vm = this;
        vm.photo = photo;

        activate();

        function activate() {
            console.log("PhotoCtrl loaded");
        }
    }
})();
