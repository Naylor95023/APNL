(function () {
    'use strict';
    angular.module('apnl').controller('BookChaptersCtrl', BookChaptersCtrl);

    BookChaptersCtrl.$inject = ['bookChapters'];
    function BookChaptersCtrl(bookChapters) {
        console.log(bookChapters);
        var vm = this;
        vm.bookChapters = bookChapters;

        activate();

        function activate() {
            console.log("BookChaptersCtrl loaded");
        }
    }
})();
