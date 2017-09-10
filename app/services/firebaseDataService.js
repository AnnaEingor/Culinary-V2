// culinaryApp.factory("firebaseDataService", function () {

//     //сервис будет отвечать за создание ссылок на базу данных Firebase в режиме реального времени.
//     var dbRef = firebase.database().ref();
//     var service = {
//         dbRef: dbRef,   //функция возвращает прямую ссылку на корневую структуру нашей документальной базы данных
//         students: dbRef.child('students') //функция - child (), которая позволяет нам создать дочернюю ссылку на эту корневую структуру
//     };
//     return service;

// });                        

// //создаем объект с доступом к нашей базе данных:
// function getRequestsByUser(uid) {
//     if (!students) {
//         students = $firebaseObject(firebaseDataService.students.child(uid));
//     }
//     return requests;
// }


// /*мы используем функцию $ firebaseArray для создания объекта, этот параметр используется для ссылки на Firebase.
//  Этот объект теперь связан с нашей базой данных, что означает, что каждый раз, когда вы помещаете или удаляете
//   объект из этого массива, он будет влиять на нашу базу данных в реальном времени.
//   Мы можем использовать функцию $ add или $ remove для управления нашей базой данных*/