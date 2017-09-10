//  culinaryApp.controller("newUserCtrl", function($scope, User, Users){
//     $scope.firstName = " ";
//      $scope.lastName = " ";
//      $scope.email = " "; 
//      $scope.phone = " "; 
     
//         $scope.newUser = new User({});
    
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
 $scope.saveUser = function(){
    
        $uibModal.open({
        templateUrl: "app/newUser/thank.html",
          controller: "thankCtrl"
          
      });
      };
 })
