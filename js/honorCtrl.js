(function () {
    angular.module('apnl').controller('HonorCtrl', HonorCtrl);

    HonorCtrl.$inject = ['$http'];

    function HonorCtrl($http) {
        var vm = this;
        vm.selectTab = selectTab;
        vm.selectedTab = 'professor';
        selectTab(vm.selectedTab);

        function selectTab(tab) {
            vm.selectedTab = tab;
            $http.get('data/honor.json').then(function (response) {
                if(vm.selectedTab == 'professor'){
                    console.log("HonorLoad!!");
                    vm.EVENT = response.data.Professor;
                }
                else{
                    vm.EVENT = response.data.Student;
                }
            })
        }
    }
})();
