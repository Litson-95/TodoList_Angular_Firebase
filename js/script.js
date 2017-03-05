var app = angular.module("myApp", ["firebase"]);

app.controller("myCtrl", function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('todo/').limitToLast(20);
    // download the data into a local object
    $scope.posts = $firebaseArray(ref);

});