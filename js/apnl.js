(function () {
    'use strict';

    angular.module('apnl', ['ngRoute']).config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'pages/news.html',
            controller: 'NewsCtrl as ctrl'
        });
        $routeProvider.when('/professor', {
            templateUrl: 'pages/professor.html'
        });
        $routeProvider.when('/research', {
            templateUrl: 'pages/research.html'
        });
        $routeProvider.when('/publication', {
            templateUrl: 'pages/publication.html',
            controller: 'PublicationCtrl as ctrl'
        });
        $routeProvider.when('research/books', {
            templateUrl: 'pages/tableColumn1.html',
            controller: 'BookCtrl as ctrl'
        });

        $routeProvider.otherwise({redirectTo: '/news'});
    }
})();
