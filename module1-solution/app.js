(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.dishes = "";
  $scope.lunchMessge = "";

  $scope.processLunch = function () {
    var lunchItems = $scope.dishes.split(',');
    var lunchLength = lunchItems.length;

    // Substract any empty items
    for (var j = 0; j < lunchItems.length; j++) {
      if (lunchItems[j].trim().length === 0) {
        lunchLength--;;
      }
    }

    // Display appropriate message
    if (lunchLength == 0) {
      $scope.lunchMessage = "Please enter data first";
    } else if (lunchLength <= 3) {
      $scope.lunchMessage = "Enjoy!";
    } else {
      $scope.lunchMessage = "Too Much!";
    }
  };
}

})();
