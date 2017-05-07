/**
*  Module
*
* Description
*/



// var app = angular.module('app', []);

// app.controller('HelloWorldController', function($scope) {
//        $scope.greeting = "Hello World";
// });

// app.controller('PasswordController', function PasswordController($scope){
// 	$scope.name="";
// 	$scope.pas2="";
// 	$scope.grade=function(){
// 	 	var size = $scope.name.length;
// 		if (size > 8){
// 			$scope.strength='strong';
// 		}
// 		else if(size > 3){
// 			$scope.strength='medium';
// 		}
// 		else{
// 			$scope.strength='weak';
// 		}
// 	};

// 	$scope.checkSame=function(){
// 		if ($scope.name === $scope.pas2) {
// 			$scope.secondPasStatus = "";
// 		} else {
// 			$scope.secondPasStatus = "Please input the same password in second textbox.";
// 		}
// 	};
// });


angular.module('app', [])
	.controller('PasswordController', function PasswordController($scope) {
		$scope.password = '';
		$scope.grade = function () {
			var size = $scope.password.length;
			if (size > 8) {
				$scope.strength = 'strong';
			}
			else if (size > 3) {
				$scope.strength = 'medium';
			}
			else {
				$scope.strength = 'weak';
			}
		}
	});

describe('Users factory', function () {
	it('has a dummy spec to test 2 + 2', function () {
		// An intentionally failing test. No code within expect() will never equal 4.
		expect(2 + 2).toEqual(4);
	});
});

describe('PasswordController', function () {
	beforeEach(module('app'));
	var $controller;

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	describe('$scope.grade', function () {
		var $scope, controller;


		beforeEach(function () {
			$scope = {};
			cotroller = $controller('PasswordController', { $scope: $scope });
		});

		it('sets the strength to "strong" if the password length is >8 chars', function () {
			$scope.password = 'longerthaneightchars';
			$scope.grade();
			expect($scope.strength).toEqual('strong');

		});
		it('sets the strength to "weak" if the password length is <3 chars', function () {
			$scope.password = "a";
			$scope.grade();
			expect($scope.strength).toEqual('weak');
		});
	});
});