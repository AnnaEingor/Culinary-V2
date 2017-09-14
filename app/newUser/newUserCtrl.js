 culinaryApp.controller("newUserCtrl", function($scope, $uibModal, $firebaseArray){
     $scope.formInfo ={};

     //добавляем Local Storage в для моментального ответа клиенту
     $scope.saveUser = function(){
        //console.log($scope.formInfo);
        var obj = $scope.formInfo;
        var serialObj = JSON.stringify(obj);   //сериализуем полученный объект
        localStorage.setItem("myKey", serialObj);

        //1. добавляем в базу данных Firebase.  2. Очищаем поля формы после занесения в БД
        var ref = firebase.database().ref("students");
        $firebaseArray(ref).$add(obj)
          .then(
              function(ref){
               $scope.formInfo = {};
               $scope.userForm.$setPristine();
               
               $scope.userForm.$setValidity();
               $scope.userForm.$setUntouched();
               // in my case I had to call $apply to refresh the page, you may also need this.
               $scope.$apply();
        },
        function(error){
            console.log(error);
        }
        );

         $uibModal.open({
        templateUrl: "app/newUser/thank.html",
          controller: "thankCtrl"
       
      }); 
   

    };

});

culinaryApp.directive('clickOnce', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var deleteText = attrs.clickOnce;

            element.bind('click', function() {
                $timeout(function() {
                    if (deleteText) {
                        element.html(deleteText);
                    }
                    element.attr('disabled', true);
                }, 0);
            });
        }
    };
});
