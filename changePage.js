(function() {
    var app = angular.module('_tabApp', []);
    app.controller('_tabCtrl', function ($scope) {
        $scope.currentTab = 'homeContent.html';

        $scope.onClickTab = function (tab) {
            var index = "'" + tab + ".html'";
            $scope.currentTab = index;
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

