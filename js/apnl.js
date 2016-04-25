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
            controller: 'PublicationCtrl as ctrl'
        });
        $stateProvider.state("honor", {
            url: "/honor",
            templateUrl: 'pages/honor.html',
            controller: "HonorCtrl as ctrl"
        });
        $stateProvider.state('member', {
            url: "/member",
            templateUrl: 'pages/member.html',
            controller: 'MemberCtrl as ctrl',
            resolve: {member: getMember}
        });
        $stateProvider.state('member.category', {
            url: "/:category",
            templateUrl: 'pages/memberList.html',
            controller: 'MemberListCtrl as ctrl',
            resolve: {membersList: getMemberList}
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

        getMember.$inject = ['ApnlData'];
        function getMember(ApnlData) {
            return ApnlData.getMember();
        }

        getMemberList.$inject = ['ApnlData', '$stateParams'];
        function getMemberList(ApnlData, $stateParams) {
            return ApnlData.getMemberList($stateParams.category);
        }

        getResearch.$inject = ['ApnlData'];
        function getResearch(ApnlData) {
            return ApnlData.getResearch();
        }
    }
})();
