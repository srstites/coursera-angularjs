(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', '$q', 'ApiBasePath'];
function MenuDataService($http, $q, ApiBasePath) {
  var service = this;
  service.categories = [ ];

  service.getAllCategories = function() {
    var def = $q.defer();

    console.log('Calling URL: ' + ApiBasePath + 'categories.json');
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "categories.json"),
      params: {
      }
    })
    .success(function(data) {
      service.categories = data;
      def.resolve(data);
    })
    .error(function() {
      def.reject("Failed to get categories");
    });;

    return def.promise;
  }

  service.getItemsForCategory = function(categoryShortName) {
    var def = $q.defer();

    console.log('Calling URL: ' + ApiBasePath + 'menu_items.json?category=' + categoryShortName);
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "menu_items.json?category=" + categoryShortName),
      params: {
        category: categoryShortName
      }
    })
    .success(function(data) {
      def.resolve(data.menu_items);
    })
    .error(function() {
      def.reject("Failed to get items");
    });;

    return def.promise;
  }
}

})();
