angular.module('aplicacion')
.controller('expedientesController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

    try{
        console.log("INFO: expedientesController.inicio ");


    }catch(error){
        console.error("ERROR: expedientesController.error ", error);
    }

}]);