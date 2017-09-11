  //culinaryApp.controller("newUserCtrl", function($scope, User){
    
    
    
    //      $scope.saveUser = function(){
    //        var userArr = Users.getAllUsers();
    //            for(i=0; i<userArr.length; i++) {
    //              if (userArr[i].email === $scope.email) {      
    //                  alert("Вы уже зарегистрированы у нас. Просто оплачивайте и ждите подтверждение");
    //          }
    //               //    действительно новый студент. Пишем в БД
    //                students.child("pk").set({
    //               "firstName": $scope.firstName,
    //                 "lastName": $scope.lastName,
    //                 "email": $scope.email,
    //                  "phone": $scope.phone
    //                        })
    //                 };
    //                $uibModal.open({
    //                 templateUrl: "app/newUser/thank.html",
    //                 controller: "thankCtrl"
                    
    //              });
                        
    //                };
                        
    //  });

 culinaryApp.controller("newUserCtrl", function($scope, $uibModal){
     $scope.formInfo ={};

     $scope.saveUser = function(){
        //console.log($scope.formInfo);
        var obj = $scope.formInfo;
        var serialObj = JSON.stringify(obj);   //сериализуем полученный объект

        localStorage.setItem("myKey", serialObj);
        //var returnObj = JSON.parse(localStorage.getItem("myKey"));   //спарсим его обратно объект
        //console.log(returnObj.firstName);    //извлечем нужный кусок

         $uibModal.open({
        templateUrl: "app/newUser/thank.html",
          controller: "thankCtrl"
          
      }); 
    
    };

});
