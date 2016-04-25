(function () {
    angular.module('apnl').controller('HonorCtrl', HonorCtrl);

    HonorCtrl.$inject = ['$http'];
    function HonorCtrl($http) {
        var tab_links = ["#professor_link", "#student_link"];
        var vm = this;
        vm.selectTab = selectTab;
        //initialization
        selectTab('professor');

        function selectTab(tab) {
            $http.get('data/honor.json').then(function (response) {
                if(tab == 'professor'){
                    vm.EVENT = response.data.Professor;
                }
                else{
                    vm.EVENT = response.data.Student;
                }
            })
            setactive(tab);
        }

        function setactive(tab){
            var link="#" + tab + "_link";
            for(var i=0; i < tab_links.length; i++){
                $(tab_links[i]).removeClass('active');
            }
            $(link).addClass('active');
        }
    }
})();
