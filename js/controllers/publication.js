'use strict';

angular.module('apnl').controller('PublicationCtrl',[ '$scope', function($scope) {
    $scope.selectedTab = 'tab1';

    $scope.selectTab = function (tab) {
        $scope.selectedTab = tab;
    };
}]);