(function () {
    'use strict';
    angular.module('apnl').controller('NewsListCtrl', NewsListCtrl);

    NewsListCtrl.$inject = ['$http', '$stateParams'];
    function NewsListCtrl($http, $stateParams) {
        var vm = this;

        activate();

        function activate() {
            console.log("NewsListCtrl loaded");
            console.log($stateParams);
            $http.get('data/news.json').then(function (response) {
                console.log(response);
                angular.forEach(response.data.news, function (data) {
                    if (data.category == $stateParams.category) {
                        console.log(data);
                        vm.newsList = data.items;
                    }
                });
            })
        }
    }
})();
