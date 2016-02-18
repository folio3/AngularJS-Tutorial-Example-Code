/*
 * SignUp Controller
 */
app.controller('signup', function ($scope, $rootScope, $routeParams, $location, $http, RestApiClientService) {

    $scope.signup = {};

    $scope.signup = {email:'',password:'',name:'',phone:'',address:''};

    $scope.signUp = function (customer) {
        RestApiClientService.post('signup', {
            customer: customer
        }).then(function (results) {
            RestApiClientService.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };

});