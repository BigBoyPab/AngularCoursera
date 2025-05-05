( function () {
  'use strict';
  angular.module("NameCalculator",[])
  .controller("CalculateTextValue", function($scope){
  $scope.InpText="";
  $scope.textValue=0;

  $scope.outValue=function() {
    var sum=calculate($scope.InpText);
    $scope.textValue=sum;
  }
  function calculate(string)
  {
    var sum1=0;
    for(var i=0;i<string.length;i++)
    {
      sum1+=string.charCodeAt(i);
    }
    return sum1;
  }

  })
}

)();
