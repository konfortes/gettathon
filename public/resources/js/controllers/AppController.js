(function() {
    var app = angular.module("gettathon");
    var AppController = function($scope) {
        var ref = new Firebase("https://gettathon.firebaseio.com/rooms");

        $scope.roomBSrc = "/resources/img/free.jpeg"
        
        ref.on("child_changed", function(snapshot) {
            val = snapshot.val();
            // occupiedOrFree = val.occupied ? 'occupied' : 'free'
            // alert('room ' + val.name + ' is now ' + occupiedOrFree);  
            $scope.roomBSrc = val.occupied ? "/resources/img/occupied.jpeg" : "/resources/img/free.jpeg"
            $scope.$apply()
        });
    }

    app.controller("AppController", AppController);
})()