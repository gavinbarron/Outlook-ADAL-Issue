(function() {
    'use strict';

    angular.module('officeAddin')
        .controller('homeController', ['dataService', homeController]);

    /**
     * Controller constructor
     */
    function homeController(dataService) {
        var vm = this;  // jshint ignore:line
        vm.title = 'home controller';
        vm.dataObject = {};

        Office.initialize = function() {
            console.log('>>> Office.initialize()');
            getDataFromService();
        };
        getDataFromService();

        function getDataFromService() {
            dataService.getData()
                .then(function(response) {
                    vm.dataObject = response.data;
                });
        }
    }

})();
