angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, RandomValue, StudentNames, Dash) {


	$scope.myValues = function() {
		var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
		console.log(RandomValue(values));
		return (RandomValue(values));
	}
	$scope.myValues();
	$scope.bindModel = $scope.myValues();
	$scope.randomValue = RandomValue;



	$scope.pairs = function() {
		var students = [ 'Marc', 'Stephanie', 'Bill', 'John', 'Edward', 'Sinclair', 'Kingsley', 'Natalie'];
			console.log(StudentNames(students));
	}
	$scope.pairs();

	$scope.useDash = function() {
		var characters = 'Who you gonna call!?!?';
			console.log(Dash(characters));
	}
	$scope.useDash();
});
