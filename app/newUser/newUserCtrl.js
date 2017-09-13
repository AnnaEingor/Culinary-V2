 culinaryApp.controller("newUserCtrl", function($scope, $uibModal){
     $scope.formInfo ={};

     $scope.saveUser = function(){
        //console.log($scope.formInfo);
        var obj = $scope.formInfo;
        var serialObj = JSON.stringify(obj);   //сериализуем полученный объект

        localStorage.setItem("myKey", serialObj);
        
         $uibModal.open({
        templateUrl: "app/newUser/thank.html",
          controller: "thankCtrl"
          
      }); 
    
    };

});
