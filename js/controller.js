var aplapp = angular.module('aplapp', ['ngRoute']);

aplapp.controller("matchController",['$scope', matchCtrl.init]);
aplapp.controller("newmatchController",['$scope', newmatchCtrl.init]);


aplapp.config(function ($routeProvider){
	$routeProvider
	.when('/home',{
		controller: 'homeController',
		templateUrl: 'pages/home.html'
	})
	.when('/match',{
		controller: 'matchController',
		templateUrl: 'pages/matchView.html'
	})
	.when('/statistics',{
		controller: 'statisticsController',
		templateUrl: 'pages/statistics.html'
	})
	.when('/summary',{
		controller: 'summaryController',
		templateUrl: 'pages/summary.html'
	})
	.when('/team',{
		controller: 'teamController',
		templateUrl: 'pages/team.html'
	})
	.when('/player',{
		controller: 'playerController',
		templateUrl: 'pages/player.html'
	})
	.when('/login',{
		controller: 'loginController',
		templateUrl: 'pages/login.html'
	})
	.when('/newmatch',{
		controller: 'newmatchController',
		templateUrl: 'pages/newmatch.html'
	})
	.otherwise({redirectTo:'/home'});
});