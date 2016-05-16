(function () {
    'use strict';
    angular.module('apnl').factory('ApnlData', ApnlDataService);

    ApnlDataService.$inject = ['$http'];
    function ApnlDataService($http) {
        console.log("ApnlData loaded!");
        var service = {};
        service.getNews = getNews;
        service.getNewsList = getNewsList;
        service.getProfessor = getProfessor;
        service.getMember = getMember;
        service.getMemberList = getMemberList;
        service.getResearch = getResearch;
        service.getPublication = getPublication;
        service.getJournalPapers = getJournalPapers;
        service.getJournalPapersList = getJournalPapersList;
        service.getResearchProjects = getResearchProjects;
        service.getResearchProjectsAmounts = getResearchProjectsAmounts;
        service.getBookChapters = getBookChapters;
        service.getPatents = getPatents;
        service.getDomesticPapers = getDomesticPapers;
        service.getInternationalPapers = getInternationalPapers;
        service.getHonor = getHonor;
        service.getPhoto = getPhoto;


        function getNews() {
            return $http.get('data/news.json')
                .then(success)
                .catch(failed);

            function success(response) {
                console.log(response);
                return response.data.news;
            }

            function failed(error) {
                console.log("getNewsFailed", error);
            }
        }

        function getNewsList(category) {
            return $http.get('data/news.json')
                .then(success)
                .catch(failed);

            function success(response) {
                console.log('getNewsList', response);
                var newsList = [];
                angular.forEach(response.data.news.list, function (data) {
                    if (data.category == category) {
                        newsList = data.items;
                    }
                });
                return newsList;
            }

            function failed(error) {
                console.log("getNewsListFailed", error);
            }
        }

        function getProfessor() {
            return $http.get("data/professor.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.professor;
            }

            function failed(error) {
                console.log("getProfessor", error);
            }
        }

        function getMember() {
            return $http.get("data/member.json")
                .then(success)
                .catch(failed);

            function success(response) {
                console.log("getMember Load!");
                return response.data.member;
            }

            function failed(error) {
                console.log("getMember", error);
            }
        }

        function getMemberList(category) {
            return $http.get('data/member.json')
                .then(success)
                .catch(failed);
            function success(response) {
                console.log('getMemberList', response);
                var memberList = [];
                angular.forEach(response.data.member, function (data) {
                    if (data.category == category) {
                        memberList = data.items;
                    }
                });
                console.log(memberList);
                return memberList;
            }

            function failed(error) {
                console.log("getMemberListFailed", error);
            }
        }

        function getResearch() {
            return $http.get("data/research.json")
                .then(success)
                .catch(failed);
            function success(response) {
                return response.data.research;
            }

            function failed(error) {
                console.log("getResearch", error);
            }
        }

        function getPublication() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);
            function success(response) {
                return response.data.publication;
            }

            function failed(error) {
                console.log("getPublication", error);
            }
        }

        function getJournalPapers() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);
            function success(response) {
                return response.data.publication.journalPapers;
            }

            function failed(error) {
                console.log("getJournalPaper", error);
            }
        }

        function getJournalPapersList(category) {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);
            function success(response) {
                var journalPapers = [];
                angular.forEach(response.data.publication.journalPapers, function (data) {
                    if (data.category == category) {
                        journalPapers = data.items;
                    }
                });

                return journalPapers;
            }

            function failed(error) {
                console.log("getJournalPapers", error);
            }
        }

        function getResearchProjects() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.publication.researchProjects;
            }

            function failed(error) {
                console.log("getResearchProjects", error);
            }
        }

        function getResearchProjectsAmounts() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);

            function success(response) {
                var amount = 0;
                angular.forEach(response.data.publication.researchProjects, function (project) {
                    amount += project.amount;
                });
                return amount;
            }

            function failed(error) {
                console.log("getResearchProjectsAmounts", error);
            }
        }

        function getBookChapters() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.publication.bookChapters;
            }

            function failed(error) {
                console.log("getBookChapters", error);
            }
        }

        function getPatents() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.publication.patents;
            }

            function failed(error) {
                console.log("getPatents", error);
            }
        }

        function getDomesticPapers() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.publication.conferences.domestic;
            }

            function failed(error) {
                console.log("getPatents", error);
            }
        }

        function getInternationalPapers() {
            return $http.get("data/publication.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.publication.conferences.international;
            }

            function failed(error) {
                console.log("getPatents", error);
            }
        }

        function getHonor() {
            return $http.get("data/honor.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.honor;
            }

            function failed(error) {
                console.log("getPatents", error);
            }
        }

        function getPhoto() {
            return $http.get("data/photo.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.photo;
            }

            function failed(error) {
                console.log("getPatents", error);
            }
        }

        return service;
    }
})();


