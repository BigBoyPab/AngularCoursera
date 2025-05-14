(function() {
  angular.module("UpperCaseConverter",[])
  .controller("toUpper", UpperC)
  toUpper.$inject=["$scope","$filter"]
function UpperC ($scope,$filter){
$scope.input="pabo";
$scope.up=function() {
  var s=$filter('uppercase');
  $scope.input=s($scope.input);
}
}

})();
