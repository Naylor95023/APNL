(function () {
    angular.module('apnl').controller('PublicationCtrl', PublicationCtrl);

    PublicationCtrl.$inject = [$http];

    function PublicationCtrl($http){
        var vm = this;
        vm.selectTab = selectTab;
        vm.selectedTab = 'tab1';
        selectTab('tab1');

        function selectTab(tab){
            vm.selectedTab = tab;
            $http.get('data/publication.json').then(function (response) {
                switch (vm.selectedTab){
                    case "tab1":
                        vm.PUBLICATION = response.data.JournalPapers;
                        break;
                    case "tab2":
                        vm.PUBLICATION = response.data.BookName;
                        break;
                    case "tab3":
                        vm.PUBLICATION = response.data.Patent;
                        break;
                    case "tab4":
                        vm.PUBLICATION = response.data.ConferencePapers;
                        break;
                    default:
                        vm.PUBLICATION = response.data.JournalPapers;
                        break;
                }
            })
        }
    }
})();


