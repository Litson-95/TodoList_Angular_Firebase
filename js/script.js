var app = angular.module("myApp", ["firebase"]);

app.controller("myCtrl", function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('todo/').orderByChild("sortDate");
    // download the data into a local object
    $scope.posts = $firebaseArray(ref);
    $scope.deletePost = function(list){
        $scope.posts.$remove(list);
    }
});
