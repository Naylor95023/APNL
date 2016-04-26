(function () {
    'use strict';
    angular.module('apnl', ['ui.router', 'ngYoutubeEmbed']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('news', {
            url: "",
            templateUrl: 'pages/news.html',
            controller: 'NewsCtrl as ctrl',
            resolve: {news: getNews}
        });

        $stateProvider.state('news.category', {
            url: "/news/:category",
            templateUrl: 'pages/newsList.html',
            controller: 'NewsListCtrl as ctrl',
            resolve: {newsList: getNewsList}
        });

        $stateProvider.state('professor', {
            url: "/professor",
            templateUrl: 'pages/professor.html',
            controller: 'ProfessorCtrl as ctrl',
            resolve: {professor: getProfessor}
        });
        $stateProvider.state('research', {
            url: "/research",
            templateUrl: 'pages/research.html',
            controller: 'ResearchCtrl as ctrl',
            resolve: {research: getResearch}
        });
        $stateProvider.state('publication', {
            url: "/publication",
            templateUrl: 'pages/publication.html',
            controller: 'PublicationCtrl as ctrl',
            resolve: {publication: getPublication}
        });
        $stateProvider.state('publication.researchProjects', {
            url: "/researchProjects",
            templateUrl: 'pages/researchProjects.html'
        });
        $stateProvider.state('publication.journalPapers', {
            url: "/journalPapers",
            templateUrl: 'pages/journalPapers.html'
        });
        $stateProvider.state('publication.bookChapters', {
            url: "/bookChapters",
            templateUrl: 'pages/bookChapters.html'
        });
        $stateProvider.state('publication.patents', {
            url: "/patents",
            templateUrl: 'pages/patents.html'
        });
        $stateProvider.state('publication.conferences', {
            url: "/conferences",
            templateUrl: 'pages/conferences.html'
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

        getNews.$inject = ['ApnlData'];
        function getNews(ApnlData) {
            return ApnlData.getNews();
        }

        getNewsList.$inject = ['ApnlData', '$stateParams'];
        function getNewsList(ApnlData, $stateParams) {
            return ApnlData.getNewsList($stateParams.category);
        }

        getProfessor.$inject = ['ApnlData'];
        function getProfessor(ApnlData) {
            return ApnlData.getProfessor();
        }

        getResearch.$inject = ['ApnlData'];
        function getResearch(ApnlData) {
            return ApnlData.getResearch();
        }

        getPublication.$inject = ['ApnlData'];
        function getPublication(ApnlData) {
            return ApnlData.getPublication();
        }

    }
})();
