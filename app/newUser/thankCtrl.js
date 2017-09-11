culinaryApp.controller("thankCtrl", function($scope, $uibModalInstance){
    

    var returnObj = JSON.parse(localStorage.getItem("myKey"));   //спарсим объект
    console.log(returnObj.firstName);  
    $scope.yourName = returnObj.firstName;

     $scope.dismiss = function () {
         $uibModalInstance.close("User dismissed");
     };

     
 })