(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/components/categories.component.html',
  controller: CategoriesComponentController,
  bindings: {
    categories: '<',
  }
});

function CategoriesComponentController() {
  var $ctrl = this;
}

})();
