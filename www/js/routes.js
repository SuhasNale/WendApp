angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider

		.state('login', {
			url: '/loginurl',
			templateUrl: 'templates/login.html',
			controller: 'loginCtrl'
		})

		.state('signup', {
			url: '/signupurl',
			templateUrl: 'templates/signup.html',
			controller: 'signupCtrl'
		})	

		.state('welcome', {
			url: '/welcomeurl',
			templateUrl: 'templates/welcome.html',
			controller: 'welcomeCtrl'
		})

	$urlRouterProvider.otherwise('/loginurl')
});