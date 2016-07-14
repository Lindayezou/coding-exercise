angular.module("aptApp.AptDetailController", ['ui.bootstrap'])

.controller("AptDetailController", function($scope, $http, $location, $window) {
	$scope.apt = $window.localStorage.getItem('aptName')

	$scope.listPage = function() {
		$location.path('/apt-list');
	} 

});