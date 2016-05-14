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
            templateUrl: 'pages/researchProjects.html',
            controller: 'ResearchProjectsCtrl as ctrl',
            resolve: {
                researchProjects: getResearchProjects,
                amounts: getResearchProjectsAmounts
            }
        });
        $stateProvider.state('publication.journalPapers', {
            url: "/journalPapers",
            templateUrl: 'pages/journalPapers.html',
            controller: 'JournalPapersCtrl as ctrl',
            resolve: {journalPapers: getJournalPapers}
        });
        $stateProvider.state('publication.journalPapers.journalPapersList', {
            url: "/journalPapersList/:category",
            templateUrl: 'pages/journalPapersList.html',
            controller: 'JournalPapersListCtrl as ctrl',
            resolve: {journalPapersList: getJournalPapersList}
        });
        $stateProvider.state('publication.bookChapters', {
            url: "/bookChapters",
            templateUrl: 'pages/bookChapters.html',
            controller: 'BookChaptersCtrl as ctrl',
            resolve: {bookChapters: getBookChapters}
        });
        $stateProvider.state('publication.patents', {
            url: "/patents",
            templateUrl: 'pages/patents.html',
            controller: 'PatentsCtrl as ctrl',
            resolve: {patents: getPatents}
        });
        $stateProvider.state('publication.conferences', {
            url: "/conferences",
            templateUrl: 'pages/conferences.html',
            controller: 'ConferencesCtrl as ctrl'
        });
        $stateProvider.state('publication.conferences.domestic', {
            url: "/domestic",
            templateUrl: 'pages/domesticPapers.html',
            controller: "DomesticConferenceCtrl as ctrl",
            resolve: { domesticPapers: getDomesticPapers}
        });
        $stateProvider.state('publication.conferences.international', {
            url: "/international",
            templateUrl: 'pages/internationalPapers.html',
            controller: "InternationalConferenceCtrl as ctrl",
            resolve: { internationalPapers: getInternationalPapers}
        });

        $stateProvider.state("honor", {
            url: "/honor",
            templateUrl: 'pages/honor.html',
            controller: "HonorCtrl as ctrl"
        });

        $stateProvider.state("honor.professor", {
            url: "/professor",
            templateUrl: 'pages/professorHonor.html',
            controller: "ProfessorHonorCtrl as ctrl",
            resolve: {honor: getHonor}
        });

        $stateProvider.state("honor.students", {
            url: "/students",
            templateUrl: 'pages/studentsHonor.html',
            controller: "StudentsHonorCtrl as ctrl",
            resolve: {honor: getHonor}
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
            resolve: {memberList: getMemberList}
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

        getPublication.$inject = ['ApnlData'];
        function getPublication(ApnlData) {
            return ApnlData.getPublication();
        }

        getJournalPapers.$inject = ['ApnlData'];
        function getJournalPapers(ApnlData) {
            return ApnlData.getJournalPapers();
        }

        getJournalPapersList.$inject = ['ApnlData', '$stateParams'];
        function getJournalPapersList(ApnlData, $stateParams) {
            return ApnlData.getJournalPapersList($stateParams.category);
        }

        getResearchProjects.$inject = ['ApnlData'];
        function getResearchProjects(ApnlData) {
            return ApnlData.getResearchProjects();
        }

        getResearchProjectsAmounts.$inject = ['ApnlData'];
        function getResearchProjectsAmounts(ApnlData) {
            return ApnlData.getResearchProjectsAmounts();
        }

        getBookChapters.$inject = ['ApnlData'];
        function getBookChapters(ApnlData) {
            return ApnlData.getBookChapters();
        }

        getPatents.$inject = ['ApnlData'];
        function getPatents(ApnlData) {
            return ApnlData.getPatents();
        }

        getDomesticPapers.$inject = ['ApnlData'];
        function getDomesticPapers(ApnlData) {
            return ApnlData.getDomesticPapers();
        }

        getInternationalPapers.$inject = ['ApnlData'];
        function getInternationalPapers(ApnlData) {
            return ApnlData.getInternationalPapers();
        }

        getHonor.$inject = ['ApnlData'];
        function getHonor(ApnlData) {
            return ApnlData.getHonor();
        }
    }
})();
