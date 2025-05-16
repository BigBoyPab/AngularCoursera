( function(){
  angular.module("Spliter",[])
  .controller("splitting",splitting);
  splitting.$inject=["$scope"];
  function splitting($scope){
  $scope.verify=function(){
    if (!$scope.inp) {$scope.result = "Please enter data first";}
    else{
    var words= $scope.inp.split(",");
    if(words.length<=3) {$scope.result="Enjoy!"}
    else {$scope.result="Too much!"}
  }
  };
  };
}
)();
