var app=angular.module("myApp",[]);

app.directive("rangeSlider", function () {
    return {
        restrict: "E",        
        scope:{
          maxpoints:"@",
          minpoints:"@",
          steps:"@",
          valueslider:"="
        },
        templateUrl:'template.html',
        controller:function  ($scope) {
          // body...
          $scope.valueslider=150;
        },
         replace:true,
         transclude:true,
        link: function(scope, element)
        {
          element.bind("click",function  () {
            // body...
            scope.valueslider=scope.rangeyear;
            console.log('log value: '+scope.valueslider)

          });
        }        
      };
});