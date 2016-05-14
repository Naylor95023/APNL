(function () {
    angular.module('apnl').controller('HonorCtrl', HonorCtrl);

    HonorCtrl.$inject = ['$state'];
    function HonorCtrl($state) {
        var vm = this;

        activate();

        function activate() {
            $state.go("honor.professor");
        }
    }
})();
