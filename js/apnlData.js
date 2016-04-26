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
        service.getResearch = getResearch;
        service.getPublication = getPublication;
        service.getJournalPapers = getJournalPapers;
        service.getJournalPapersList = getJournalPapersList;

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
                angular.forEach(response.data.news, function (data) {
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

        return service;
    }
})();


