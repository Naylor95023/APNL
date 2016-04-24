(function () {
    'use strict';


    angular.module('apnl', ['ui.router']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('news', {
            url: "",
            templateUrl: 'pages/news.html',
            controller: 'NewsCtrl as ctrl'
        });
        $stateProvider.state('news.category', {
            url: "/news/:category",
            templateUrl: 'pages/newsList.html',
            controller: 'NewsListCtrl as ctrl'
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
        $stateProvider.state("honor", {
            url: "/honor",
            templateUrl: 'pages/honor.html',
            controller: "HonorCtrl as ctrl"
        });
        $stateProvider.state('member', {
            url: "/member",
            templateUrl: 'pages/member.html'
        });
        $stateProvider.state('contact', {
            url: "/contact",
            templateUrl: 'pages/contact.html'
        });
        $stateProvider.state('recruitment', {
            url: "/recruitment",
            templateUrl: 'pages/recruitment.html'
        });
        $stateProvider.state('photo', {
            url: "/photo",
            templateUrl: 'pages/photo.html'
        });

        $urlRouterProvider.otherwise('');
    }
})();
