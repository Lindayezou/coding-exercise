angular.module("aptApp.AptListController", ['ui.bootstrap', 'angularUtils.directives.dirPagination'])

.controller("AptListController", function($scope, $http, $location, $window) {
	$scope.buttons = ["Popularity", "Price"]
	$scope.sort = "popularity";
	$scope.data = [];
	$scope.pageData = [];
	$scope.maxSize = 5;
	$scope.currentPage = 1;
	$scope.numPerPage = 5;
	$scope.numData;

	$http.get('apartment.json')
	  .then(function(res){
	    $scope.data = res.data;  
	  });

	$scope.detailsPage = function(apt) {
		console.log("I want this one: ", apt)
		$window.localStorage.setItem('aptName', apt.name);
		$location.path('/apt-detail');
	}  

	$scope.selectSort = function (sortType) {
		$scope.sort = sortType;
	}
});

