controllers.controller('ListDetailCtrl', function($scope, $stateParams, Lists) {
  $scope.list = Lists.get($stateParams.listId);
    
  $scope.removeItem = function(listId,item) {
      Lists.removeItem(listId,item);
  };
    

});

