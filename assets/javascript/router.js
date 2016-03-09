var app = angular.module('application', ['ui.router','ngAnimate', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })
    .state('contatos', {
      url:"/contatos",
      templateUrl: "templates/contatos.html"
    })
    .state('novo-contato', {
      url:"/novo-contato",
      templateUrl: "templates/contato.html"
    })

});
