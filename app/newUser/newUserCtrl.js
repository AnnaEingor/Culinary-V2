 culinaryApp.controller("newUserCtrl", function($scope, $uibModal, $firebaseArray){
     $scope.formInfo ={};

     //добавляем Local Storage в для моментального ответа клиенту
     $scope.saveUser = function(){
        //console.log($scope.formInfo);
        var obj = $scope.formInfo;
        var serialObj = JSON.stringify(obj);   //сериализуем полученный объект
        localStorage.setItem("myKey", serialObj);
        

         $uibModal.open({
        templateUrl: "app/newUser/thank.html",
          controller: "thankCtrl"
          
      }); 

      //1. добавляем в базу данных Firebase.  2. Очищаем поля формы после занесения в БД
    
      var ref = firebase.database().ref("students");
      $firebaseArray(ref).$add(obj)
          .then(
              function(ref){
                  $scope.student.firstName = " ";
                  $scope.student.lastName = " ";
                  $scope.student.email = " ";
                  $scope.student.phone = " ";
        },
        function(error){
            console.log(error);
        }
        );

    };

});
