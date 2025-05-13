(function() {
  angular.module("UpperCaseConverter",[])
  .controller("toUpper", function ($scope,$filter){
$scope.input="pabo";
$scope.up=function() {
  var s=$filter('uppercase');
  $scope.input=s($scope.input);
}
}
)
})();
