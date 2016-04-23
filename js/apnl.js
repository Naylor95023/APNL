(function () {
    'use strict';

    angular.module('apnl', ['ui.router']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('news', {
            url: "/news",
            templateUrl: 'pages/news.html',
            controller: 'NewsCtrl as ctrl'
        });
        $stateProvider.state('professor', {
            url: "/professor",
            templateUrl: 'pages/professor.html'
        });
        $stateProvider.state('research', {
            url: "/research",
            templateUrl: 'pages/research.html'
        });
        $stateProvider.state('publication', {
            url: "/publication",
            templateUrl: 'pages/publication.html',
            controller: 'PublicationCtrl as ctrl'
        });

        $urlRouterProvider.otherwise('/news');
    }
})();
