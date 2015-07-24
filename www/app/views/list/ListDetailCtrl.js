controllers.controller('ListDetailCtrl', function($scope, $stateParams, Lists) {
  $scope.list = Lists.get($stateParams.listId);
  
  $scope.msgErr = false;
  
  $scope.removeItem = function(listId,item) {
    Lists.removeItem(listId,item);
  };
    
  $scope.newItem = {
    id : $scope.list.items.length, 
    name : "",
    qtd : "", 
    unity : "",
    checked : false,
      
    validate : function (){
            if ( this.name.length <=0 ){
                $scope.msgErr = "Nome do item não pode ser vazio";
                return false;
            }
            $scope.msgErr = false;
            return true;
    },
      
    addItem : function (){
        if ( !this.validate() ) return false; 
        var msg = Lists.addItem($scope.list.id,this);
        if (msg)  window.location.hash="/tab/lists/"+$scope.list.id;
    }
      
  }
   
 
    

});

