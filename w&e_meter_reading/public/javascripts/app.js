angular.module('app', ['app.controllers', 'app.services','ui.router','ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when("","/login");

    $stateProvider.state("home",{
                            url: "/home",
                            templateUrl: "/templates/home.html",
                            controller: "homeCtrl"

    }).state("login",{
        url: "/login",
        templateUrl: "/templates/login.html",
        controller: "loginCtrl"

    })
    .state("register",{
        url: "/register",
        templateUrl: "/templates/register.html",
        controller: "registerCtrl"

    })
    .state("balances",{
        url: "/balances",
        templateUrl: "/templates/balances.html",
        controller: "balancesCtrl"
    })
    .state("contact",{
        url: "/contact",
        templateUrl: "/templates/contact.html",
        controller: "contactCtrl"
    })
    .state("emeter",{
        url: "/emeter",
        templateUrl: "/templates/emeter.html",
        controller: "emeterCtrl"
    })
    .state("wmeter",{
        url: "/wmeter",
        templateUrl: "/templates/wmeter.html",
        controller: "wmeterCtrl"
    })
    .state("monthly",{
        url: "/monthly",
        templateUrl: "/templates/monthly.html",
        controller: "monthlyCtrl"
    })

})