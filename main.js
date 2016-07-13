var aptApp = angular.module('aptApp', [
  'ngRoute',
   'aptApp.AptListController', 
   'aptApp.AptDetailController'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/apt-list', {
      templateUrl: 'views/apt-list.html',
      controller: 'AptListController'
    })
    .when('/apt-detail', {
      templateUrl: 'views/apt-detail.html',
      controller: 'AptDetailController'
    })
    .otherwise({redirectTo: '/apt-list'});
}]);