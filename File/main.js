//search button
let search = document.querySelector('.search-box');


document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}
	  //visitor's count
      var counter = document.querySelector("#counter");
      var reset = document.querySelector("#container");
      var vicount = localStorage.getItem("pview");
      
      if (vicount){
          vicount = Number(vicount)+1
          localStorage.setItem("pview",vicount);
      }
      else{
          vicount = 1
          localStorage.setItem("pview",1);
      }
      counter.innerHTML = vicount;
      
      reset.addEventListener("click",()=>{
          vicount = 1;
          localStorage = ("pview",1);
          counter.innerHTML = vicount;
      });
      const button = document.querySelector('#button');
      const disable = () => {
          console.log("count");
          button.disable = true;
      };
      button.addEventListener('click', disable);

      //ng-route angular Our Products
     // var app = angular.module("myApp", ["ngRoute"]);

      //app.config(function($routeProvider) {
        //  $routeProvider
          //    .when("/", {
            //      templateUrl: "home.html"
              //})
              //.when("/led", {
                //  templateUrl: "led.html"
              //})
              //.when("/wall", {
                //  templateUrl: "wall.html"
              //})
              //.when("/fan", {
                //  templateUrl: "fan.html"
              //})
              //.when("/ceiling", {
                //  templateUrl: "ceiling.html"
             // })
              //.when("/lamp", {
                //  templateUrl: "lamp.html"
             // })
              //.when("/outdoor", {
                //  templateUrl: "outdoor.html"
             // })
              //.otherwise({
                //  redirectTo: "/"
              //});
      //});
//header








