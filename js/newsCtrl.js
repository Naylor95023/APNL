(function () {
    angular.module('apnl').controller('NewsCtrl', NewsCtrl);

    NewsCtrl.$inject = [$http];
    function NewsCtrl($http) {
        var vm = this;
        $http.get('data/news.json').then(function (response) {
            vm.NEWS = response.data.New_2;
        })
    }
})();