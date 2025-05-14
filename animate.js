(function(){
  angular.module("animate1",[])
  .controller("animated", animated);
  animated.$inject=["$scope"];
  function animated($scope){
    $scope.PicType="original";

  $scope.animation= function()
  {
    $scope.PicType="animated";
  };
};
}

)();
