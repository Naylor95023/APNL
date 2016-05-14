(function () {
    'use strict';
    angular.module('apnl').controller('ConferencesCtrl', ConferencesCtrl);

    ConferencesCtrl.$inject = ['$state'];
    function ConferencesCtrl($state) {
        var vm = this;

        activate();

        function activate() {
            $state.go("publication.conferences.domestic");
            console.log("ConferencesCtrl loaded");
        }
    }
})();
