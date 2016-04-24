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

        function getMember(){
            return $http.get("data/member.json")
                .then(success)
                .catch(failed);

            function success(response) {
                return response.data.member;
            }

            function failed(error) {
                console.log("getMember", error);
            }
        }

        function getMemberList (category) {
            return $http.get('data/news.json')
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

        return service;
    }
})();


