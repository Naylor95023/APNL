(function () {
    'use strict';

    angular.module('apnl').controller('MemberCtrl', MemberCtrl);

    MemberCtrl.$inject = ['$state', 'member'];
    function MemberCtrl($state, member) {
        var vm = this;
        vm.member = member;

        $state.transitionTo('member.category', {category: member[0].category}, {
            location: false
        });
    }
})();
