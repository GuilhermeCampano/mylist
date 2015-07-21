controllers.controller('ListDetailCtrl', function($scope, $stateParams, Lists) {
  $scope.list = Lists.get($stateParams.listId);

  $scope.newItem = {
    id : $scope.list.items.length, 
    name : "",
    qtd : 1, 
    unity : "",
    addItem : function (){
        console.log(this);
        var msg = Lists.addItem($scope.list.id,this);
        if (msg)  window.location.hash="/tab/lists/"+$scope.list.id;
    }
      
  }
   
  $scope.removeItem = function(listId,item) {
    Lists.removeItem(listId,item);
  };
    

});

