app.controller('CafeteriaController', function($scope){
	$scope.blanks = {
		   one: '', 
		   two: '', 
		 three: '',
		  four: '',
		  five: '',
		   six: '',
		 seven: '',
		 eight: '',
		  nine: '',
		   ten: '',
		eleven: ''
	};
	$scope.submit = function (){
		   $scope.blanks.one = $scope.one;
		   $scope.blanks.two = $scope.two;
	     $scope.blanks.three = $scope.three;
		  $scope.blanks.four = $scope.four;
		  $scope.blanks.five = $scope.five;
		   $scope.blanks.six = $scope.six;
		 $scope.blanks.seven = $scope.seven;
		 $scope.blanks.eight = $scope.eight;
		  $scope.blanks.nine = $scope.nine;
		   $scope.blanks.ten = $scope.ten;
		$scope.blanks.eleven = $scope.eleven;

	}

});	

