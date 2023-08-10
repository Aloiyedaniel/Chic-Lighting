var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "fan.html"
		})
		.when("/about", {
			templateUrl: "home.html"
		})
		.when("/contact", {
			templateUrl: "lamp.html"
		})
		.when("/contact", {
			templateUrl: "outdoor.html"
		})
		.when("/contact", {
			templateUrl: "ceiling.html"
		})
		.when("/contact", {
			templateUrl: "fan.html"
		})
		.when("/contact", {
			templateUrl: "led.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});
