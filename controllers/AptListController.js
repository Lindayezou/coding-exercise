angular.module("aptApp.AptListController", ['ui.bootstrap'])

.controller("AptListController", function($scope, $http, $location, $window) {
	$scope.buttons = ["popularity", "price"]
	$scope.sort = "popularity";

	$http.get('apartment.json')
	  .then(function(res){
	    $scope.data = res.data;  
	    console.log($scope.data);
	  });

	$scope.detailsPage = function(apt) {
		console.log("I want this one: ", apt)
		$window.localStorage.setItem('aptName', apt.name );
		$location.path('/apt-detail');
	}  

	$scope.selectSort = function (sortType) {
		$scope.sort = sortType;
	}
});

