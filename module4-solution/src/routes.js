(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })

  // Category List Page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories.template.html',
    controller: 'CategoriesController as categoryList',
    resolve: {
      categories: [ 'MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }
      ]
    }
  })

  // Item List Page
  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/items.template.html',
    controller: 'ItemsController as itemList',
    params: {
      categoryShortName: null
    },
    resolve: {
      items: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }
      ]
    }
  });
}

})();
