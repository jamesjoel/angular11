var app = angular.module('myApp', []);

app.filter("myFilter", function(){
	return function(a, b){
		if(b<=25)
			return ((a*10/100)+a);
		else
			return ((a*20/100)+a);

	}
});


app.controller('myCtrl', function($scope){
	// $scope.data=["red", "green", "blue"];
	$scope.data=[
		{
			name : "rohit",
			age : 25,
			fee : 2500
		},
		{
			name : "james",
			age : 23,
			fee : 1200
		},
		{
			name : "mohit",
			age : 26,
			fee : 3500
		},
		{
			name : "kishan",
			age : 22,
			fee : 3100
		},
		{
			name : "sanjay",
			age : 27,
			fee : 4000
		},
		{
			name : "shruti",
			age : 25,
			fee : 3500
		},
		{
			name : "Taha",
			age : 30,
			fee : 5500
		}

	];
	$scope.x="Indore";
	$scope.y="male";
	$scope.city="dewas";
	$scope.show=function(a){
		// $scope.x=a;
		// console.log("calling", a);
		console.log($scope.x);
	}

});