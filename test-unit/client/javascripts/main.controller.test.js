/* globals describe, it, beforeEach, inject, module, chai */

var expect = chai.expect;

describe('mainController', function() {
    
    var scope;
    var http;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($rootScope, $controller, _$http_) {
        scope = $rootScope.$new();
        http = _$http_;
        $controller('mainController', {$scope: scope, $http: http});
    }));
  
    it('message', function() {
        expect(scope.message).to.equal('Hello world');
    });
});