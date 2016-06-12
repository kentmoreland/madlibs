var app = angular.module('madlibs', ['ui.router']);

app.controller('mainController', function($scope){
	$scope.test = "This is a test";
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
				url: '/home',
		templateUrl: "app/components/home/home.html", 
		 controller:   "mainController"
	})

	.state('cafeteria', {
				url: '/cafeteria',
		templateUrl: 'app/components/our_cafeteria/our_cafeteria.html',
		 controller: "CafeteriaController"
	})
}]);