(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/components/items.component.html',
  controller: ItemsComponentController,
  bindings: {
    items: '<',
    myTitle: '@title'
  }
});

function ItemsComponentController() {
  var $ctrl = this;

}

})();
