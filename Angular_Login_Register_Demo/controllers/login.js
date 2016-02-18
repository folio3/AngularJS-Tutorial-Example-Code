/*
 * Login Controller
 */
app.controller('login', function ($scope, $rootScope, $routeParams, $location, $http, RestApiClientService) {

    //initially set those objects to null to avoid undefined error
    $scope.login = {};

    $scope.doLogin = function (customer) {
        RestApiClientService.post('login', {
            customer: customer
        }).then(function (results) {
            RestApiClientService.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        });
    };

    $scope.logout = function () {
        RestApiClientService.get('logout').then(function (results) {
            RestApiClientService.toast(results);
            $location.path('login');
        });
    }
});