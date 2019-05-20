angular.module('aplicacion')
.controller('pacientesController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

    try{
        console.log("INFO: pacientesController.inicio ");


    }catch(error){
        console.error("ERROR: pacientesController.error ", error);
    }

}]);