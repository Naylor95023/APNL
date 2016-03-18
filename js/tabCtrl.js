(function () {
    angular.module('apnl').controller('TabCtrl', TabCtrl);

    TabCtrl.$inject = [];
    function TabCtrl() {
        var vm = this;
        vm.onClickTab = onClickTab;
        vm.currentTab = getIncludeUrl('home');

        function onClickTab(tab) {
            vm.currentTab = getIncludeUrl(tab);
        }

        function getIncludeUrl(page) {
            return "pages/" + page + ".html";
        }
    }
})();