(function () {
    angular.module('apnl').controller('HonorCtrl', HonorCtrl);

    HonorCtrl.$inject = ['$http'];

    function HonorCtrl($http) {
        var vm = this;
        vm.selectTab = selectTab;
        vm._tab = 'professor';
        selectTab(vm._tab);

        function selectTab(tab) {
            vm._tab = tab;
            $http.get('data/honor.json').then(function (response) {
                if(vm._tab == 'professor'){
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
