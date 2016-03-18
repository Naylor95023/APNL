(function() {
    var app = angular.module('_tabApp', []);
    app.controller('_tabCtrl', function ($scope) {
        $scope.currentTab = getIncludeUrl('homeContent');

        $scope.onClickTab = function (tab) {
            $scope.currentTab = getIncludeUrl(tab);
        };

        function getIncludeUrl(page) {
            return "pages/" + page + ".html";
        }
    });
})();

(function() {
var newsApp =  angular.module('_newApp',[]);
newsApp.controller('showNewsCtrl',function($scope, $http){
    $http.get('../news.json').then(function(response){
            $scope.NEWS = response.data;
        });
});
})();

