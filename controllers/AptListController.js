angular.module("aptApp.AptListController", ['ui.bootstrap'])

.controller("AptListController", function($scope, $http, $location) {
	$http.get('apartment.json')
	  .then(function(res){
	    $scope.data = res.data;  
	    console.log($scope.data);
	  });
});

