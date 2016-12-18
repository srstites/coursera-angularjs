(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var categoryList = this;
  categoryList.categories = categories;

  // categoryList.$onInit = function() {
  //   var cancel = $rootScope.$on('$stateChangeError',
  //     function(event, toState, toParams, fromState, fromParams, error) {
  //       console.log("got error!!!!");
  //     })
  // }
}

})();
