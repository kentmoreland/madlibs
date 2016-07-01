app.controller('CafeteriaController', function($scope){
	
	$scope.Adjectives = ["tough", "crazy", "ugly", "gross"];
	$scope.Verbs = ["add", "allow", "bake", "bang", "call"]; 
	$scope.Nouns = ["skin", "toe", "foot", "kidney"];



	$scope.pickWord = function (array){
			max = (array.length - 1);
			index = Math.floor(Math.random() * max + 1) 
			return array[index];
	
		}
	// 
	$scope.toggleBlindMode = function(){
		$scope.blindersOn = !$scope.blindersOn;
	}


	$scope.pickAdj1 = $scope.pickWord($scope.Adjectives);
	$scope.pickAdj3 = $scope.pickWord($scope.Adjectives);
	$scope.pickAdj6 = $scope.pickWord($scope.Adjectives);
	$scope.pickAdj8 = $scope.pickWord($scope.Adjectives);
	$scope.pickAdj9 = $scope.pickWord($scope.Adjectives);
	$scope.pickAdj10 = $scope.pickWord($scope.Adjectives);


	$scope.pickVerb2 = $scope.pickWord($scope.Verbs);
	$scope.pickVerb5 = $scope.pickWord($scope.Verbs);
	


	$scope.pickNoun4 = $scope.pickWord($scope.Nouns);
	$scope.pickNoun7 = $scope.pickWord($scope.Nouns);
	$scope.pickNoun10 = $scope.pickWord($scope.Nouns);
	$scope.pickNoun11 = $scope.pickWord($scope.Nouns);







});	

