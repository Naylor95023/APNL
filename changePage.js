var app = angular.module('_tabApp',[]);
app.controller('_tabCtrl', function ($scope) {
    $scope.onClickTab = function (tab) {
        var index = tab + ".html";
        $scope.currentTab = index;
    }
});

var newsApp =  angular.module('_newApp',[]);
newsApp.controller('showNewsCtrl',function($scope, $http){
    $http.get('../news.json').then(function(response){
            $scope.NEWS = response.data;
        });
});

angular.module("_newApp").directive("_contentApp", function() {
    return {
        restrict: "E",
        templateUrl: "news.html"
    }
})


var contentApp = angular.mudule('_contentApp',[]);
contentApp.controller('_contentCtrl', function ($scope) {
    $scope.onClickTab = function (tab) {

    }
});