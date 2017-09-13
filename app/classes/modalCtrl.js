 culinaryApp.controller("modalCtrl", function($scope, $location, $uibModalInstance){
    $scope.persist = function() {
        $location.path("/newUser");
        $uibModalInstance.close("User dismissed");
     };
    
     $scope.dismiss = function () {
         $uibModalInstance.close("User dismissed");
     };

     
 })