var culinaryApp = angular.module("culinaryApp", ["ngRoute", "ngAnimate", "ui.bootstrap", "ngMessages"]); 

culinaryApp.config(function($routeProvider){
    $routeProvider
 .when("/", {
   templateUrl: "app/home/school.html",
   controller: "schoolCtrl"
   })

   .when("/classes", {
           templateUrl: "app/classes/classes.html",
            controller: "classesCtrl"
       })
    .when("/gallery", {
        templateUrl: "app/gallery/gallery.html"
      })
    .when("/prices", {
        templateUrl: "app/prices/prices.html",
        controller: "pricesCtrl"
    })
    .when("/contacts", {
        templateUrl: "app/contacts/contacts.html"
    })
    // .when("/login", {
    //     templateUrl: "app/login/login.html",
    //     controller: "loginCtrl"
    // })
    .when("/newUser", {
        templateUrl: "app/newUser/newUser.html",
        controller: "newUserCtrl"
    })
    .when("/schedule", {
        templateUrl: "app/schedule/schedule.html"
    })

       .otherwise({
        templateUrl: "app/home/school.html",
        controller: "schoolCtrl"
    });
});

// culinaryApp.config(function() {
//      var config = {
//          apiKey: "AIzaSyC1aWEIcA_We_mvqKDauyzFwEoF3gFnKkg",
//          authDomain: "culinaryschool-c8176.firebaseapp.com",
//          databaseURL: "https://culinaryschool-c8176.firebaseio.com",
//          projectId: "culinaryschool-c8176",
//          storageBucket: "culinaryschool-c8176.appspot.com",
//          messagingSenderId: "64236661875"
//        };
//      firebase.initializeApp(config);
//    });