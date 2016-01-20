(function() {
    var app = angular.module("gettathon");
    var AppController = function($scope) {
        var ref = new Firebase("https://gettathon.firebaseio.com/rooms");

        ref.once("value", function(data) {
          initRooms(data.val());
        });

        ref.on("child_changed", function(snapshot) {
            val = snapshot.val(); 
            $scope.roomBSrc = val.occupied ? "/resources/img/occupied.jpeg" : "/resources/img/free.jpeg"
            $scope.$apply()
        });

        function initRooms(rooms) {
            var occupied = rooms['b'].occupied
            $scope.roomBSrc = occupied ? "/resources/img/occupied.jpeg" : "/resources/img/free.jpeg"
            $scope.$apply()
        }
    }

    app.controller("AppController", AppController);
})()