(function () {
    'use strict';
    angular.module('apnl').controller('NewsListCtrl', NewsListCtrl);

    NewsListCtrl.$inject = ['newsList'];
    function NewsListCtrl(newsList) {
        var vm = this;
        vm.newsList = newsList;
    }
})();
