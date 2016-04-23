(function () {
    angular.module('apnl').controller('PublicationCtrl', PublicationCtrl);

    PublicationCtrl.$inject = ['$http'];

    function PublicationCtrl($http) {
        var vm = this;
        vm.selectTab = selectTab;
        vm.selectedTab = 'papers';
        selectTab(vm.selectedTab);

        function selectTab(tab) {
            vm.selectedTab = tab;
            $http.get('data/publication.json').then(function (response) {
                switch (vm.selectedTab) {
                    case "papers":
                        vm.PUBLICATION = response.data.JournalPapers;
                        break;
                    case "books":
                        vm.PUBLICATION = response.data.BookName;
                        break;
                    case "patents":
                        vm.PUBLICATION = response.data.Patent;
                        break;
                    case "conferences":
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
