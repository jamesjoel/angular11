var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	// $scope.data=["red", "green", "blue"];
	$scope.data=[
		{
			name : "rohit",
			age : 25
		},
		{
			name : "james",
			age : 23
		},
		{
			name : "mohit",
			age : 25
		}

	];

});