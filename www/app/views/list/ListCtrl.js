
controllers.controller('ListCtrl', function ($scope, Lists, $state) {

    $scope.lists = Lists.all();
    $scope.msgErr = false;
    
    $scope.newList = {
        
        id : $scope.lists.length ,
        name: '',
        description: '',
        image: '',
        dateOfCreation: new Date().getTime(),
        items : [],
    
        
        add : function (){
            if ( !this.validate() ) return false; 
            var msg = Lists.add(this);
            if (msg){
                $state.transitionTo('tab.list');
            }
        },
        
        validate : function (){
            if ( this.name.length <=0 ){
                $scope.msgErr = "Nome da lista não pode ser vazia";
                return false;
            }
            $scope.msgErr = false;
            return true;
        },
    }
    
    
    $scope.remove = function (list) {
        Lists.remove(list);
    };
  
    
});

