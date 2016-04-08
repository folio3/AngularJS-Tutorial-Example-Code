angular.module("Main", ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "templates/pages/landing.html",
	})

	.when('/stores', {
		templateUrl: "templates/pages/stores/index.html",
		controller: 'StoreController'
	})

	.when('/stores/:id', {
		templateUrl: "templates/pages/stores/show.html",
		controller: 'StoreController'
	})

	.otherwise({ redirectTo: '/' })
});