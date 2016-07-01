var app = angular.module('madlibs', ['ui.router', 'ngMessages']);

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

	.state('about', {
				url: '/about',
		templateUrl: "app/components/about/about.html"
	})

	.state('cafeteria', {
				url: '/cafeteria',
		templateUrl: 'app/components/our_cafeteria/our_cafeteria.html',
		 controller: "CafeteriaController"
	})

}]);