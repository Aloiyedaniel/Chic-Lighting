var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/homeaccent", {
        templateUrl:'homeaccent.html'
    })
    .when('/led', {
        templateUrl: 'led.html'
    })
    .when('/fan', {
        templateUrl: 'fan.html'
    })
    .when('/chandalier', {
        templateUrl: 'chandalier.html'
    })
    .when('/wall', {
        templateUrl:'wall.html'
    })
    .when('/ceiling', {
        templateUrl: 'ceiling.html'
    })
    .when('/lamp', {
        templateUrl: 'lamp.html'
    })
    .when('/outdoor', {
        templateUrl: 'outdoor.html'
    }) 



}]);



/* This is the Javascript code for the hamburger menu as shown below*/


const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navBar.classList.remove("active");
    }))