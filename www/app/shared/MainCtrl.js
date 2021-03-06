controllers.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, $http, $log, $state) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.changePage = function (page){
       $state.transitionTo(page);
    }
    
    $scope.changePageByLocation = function (location){
       window.location.hash=location;
    }
   
});