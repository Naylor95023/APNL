(function () {
    angular.module('apnl').controller('PublicationCtrl', PublicationCtrl);

    PublicationCtrl.$inject = ['publication'];

    function PublicationCtrl(publication) {
        var vm = this;
        vm.publication = publication;
        console.log("PublicationCtrl", publication);
    }
})();
