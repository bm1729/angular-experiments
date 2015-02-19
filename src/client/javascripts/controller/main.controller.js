/* globals angular */

var appModule = angular.module('app', []);

appModule.controller('mainController', function($scope) {
    $scope.message = 'Hello world';
});