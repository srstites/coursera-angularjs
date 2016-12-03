(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyController ($scope, ShoppingListCheckOffService) {
  var controller = this;

  controller.boughtItem = function(idx) {
    ShoppingListCheckOffService.boughtItem(idx);
  };

  controller.getBuyList = function() {
    return ShoppingListCheckOffService.getBuyList();
  };
}

AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController ($scope, ShoppingListCheckOffService) {
  var controller = this;

  controller.getBoughtList = function() {
    return ShoppingListCheckOffService.getBoughtList();
  };
}

function ShoppingListCheckOffService () {
  var service = this;

  service.buyList = [
    {name: 'Onions', count: 2},
    {name: 'Russet potatoes', count: 4},
    {name: 'Head of garlic ', count: 1},
    {name: 'New York Strip steaks', count: 2},
    {name: 'Bunch of asparagus', count: 1},
    {name: 'Bottles of red wine', count: 2}
  ];

  service.boughtList = [ ];

  service.getBuyList = function() {
    return service.buyList;
  };

  service.getBoughtList = function() {
    return service.boughtList;
  };

  service.boughtItem = function(idx) {
    service.boughtList.push(service.buyList[idx]);
    service.buyList.splice(idx, 1);
  };
}

})();
