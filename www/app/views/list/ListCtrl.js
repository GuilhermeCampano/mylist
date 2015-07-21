
controllers.controller('ListCtrl', function ($scope, Lists, $state) {

    $scope.lists = Lists.all();
    

    $scope.newList = {
        id : $scope.lists.length ,
        name: '',
        description: '',
        image: '',
        dateOfCreation: new Date().getTime(),
        items : [],
        add : function (){
            var msg = Lists.add(this);
            if (msg) $state.transitionTo('tab.list');
        }
       
    }
    
    $scope.remove = function (list) {
        Lists.remove(list);
    };
  
    
});

