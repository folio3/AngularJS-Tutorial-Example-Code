var app = angular.module('authenticationApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'views/login.html',
            controller: 'login'
        })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'views/login.html',
                controller: 'login'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'views/signup.html',
                controller: 'signup'
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'dashboard'
            })
            .when('/', {
                title: 'Login',
                templateUrl: 'views/login.html',
                controller: 'login',
                role: '0'
            })
            .otherwise({
                redirectTo: '/login'
            });
  }]);
