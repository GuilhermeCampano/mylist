controllers.controller('ListCtrl', function($scope, Lists) {

  $scope.lists = Lists.all();
  $scope.remove = function(list) {
    Lists.remove(list);
  };
});

