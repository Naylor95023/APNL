var app = angular.module('_tabApp',[]);
app.controller('_tabCtrl', function ($scope) {
    $scope.onClickTab = function (tab) {
        var index = tab + ".html";
        $scope.currentTab = index;
    }
});