(function() {
    var app = angular.module("gettathon");
    var AppController = function($scope) {
        var ref = new Firebase("https://gettathon.firebaseio.com/rooms");

        ref.once("value", function(data) {
          initRooms(data.val());
        });

        ref.on("child_changed", function(snapshot) {
            val = snapshot.val(); 
            $scope.roomBSrc = val.occupied ? "/resources/img/occupied.png" : "/resources/img/free.png"
            $scope.$apply()
        });

        function initRooms(rooms) {
            $scope.roomASrc = rooms['a'].occupied ? "/resources/img/occupied.png" : "/resources/img/free.png"
            $scope.roomBSrc = rooms['b'].occupied ? "/resources/img/occupied.png" : "/resources/img/free.png"
            $scope.roomCSrc = rooms['c'].occupied ? "/resources/img/occupied.png" : "/resources/img/free.png"
            $scope.occupiedAll = rooms['a'].occupied && rooms['b'].occupied && rooms['c'].occupied
            $scope.$apply()
        }
    }

    app.controller("AppController", AppController);
})()