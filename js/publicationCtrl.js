(function () {
    angular.module('apnl').controller('PublicationCtrl', PublicationCtrl);

    PublicationCtrl.$inject = [];

    function PublicationCtrl(){
        var vm = this;
        vm.selectTab = selectTab;
        vm.selectedTab = 'tab1';

        function selectTab(tab){
            vm.selectedTab = tab;
        }
    }
})();


