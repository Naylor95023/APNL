(function () {
    'use strict';
    angular.module('apnl').controller('MemberListCtrl', MemberListCtrl);

    MemberListCtrl.$inject = ['membersList'];
    function MemberListCtrl(membersList) {
        var vm = this;
    }
})();