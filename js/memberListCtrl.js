(function () {
    'use strict';
    angular.module('apnl').controller('MemberListCtrl', MemberListCtrl);

    MemberListCtrl.$inject = ['memberList'];
    function MemberListCtrl(memberList) {
        console.log("MemberListCtrl In");
        var vm = this;
        vm.memberList = memberList;
    }
})();