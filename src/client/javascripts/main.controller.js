/* globals angular */

var appModule = angular.module('app', []);

appModule.controller('mainController', function($scope, $http) {
    $scope.message = 'Hello world';
    $scope.getMessage = function() {
        $http.get('message').success(function(data) {
            $scope.message = data.message;
        });
    };
});