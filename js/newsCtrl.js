(function () {
    'use strict';

    angular.module('apnl').controller('NewsCtrl', NewsCtrl);

    NewsCtrl.$inject = ['$state', 'news'];
    function NewsCtrl($state, news) {
        var vm = this;
        vm.news = news;

        $state.transitionTo('news.category', {category: news[0].category}, {
            location: false
        });
    }
})();
