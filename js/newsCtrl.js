(function () {
    'use strict';

    angular.module('apnl').controller('NewsCtrl', NewsCtrl);

    NewsCtrl.$inject = ['$http'];
    function NewsCtrl($http) {
        var vm = this;
        $http.get('data/news.json').then(function (response) {
            console.log(response);
            vm.news = response.data.news;
        })
    }
})();
