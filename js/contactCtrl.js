(function () {
    'use strict';
    angular.module('apnl').controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = [];
    function ContactCtrl() {
        var vm = this;

        activate();

        function activate() {
            console.log("ContactCtrl loaded");
        }
    }
})();
<script src="/contactCtrl.js"></script>
controller: 'ContactCtrl as ctrl'