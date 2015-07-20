controllers.controller('ListDetailCtrl', function($scope, $stateParams, Lists) {
  $scope.list = Lists.get($stateParams.listId);
  
  /*    
   $scope.newItem = {
        id : $scope.lists.length ,
        name: '',
        description: '',
        image: '',
        dateOfCreation: '',
        items : [],
        add : function (){
            var msg = Lists.add(this);
            if (msg) $state.transitionTo('tab.list');
        }
       
  }*/
   
  $scope.removeItem = function(listId,item) {
      Lists.removeItem(listId,item);
  };
    

});

