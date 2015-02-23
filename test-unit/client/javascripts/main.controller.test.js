/* globals describe, it, beforeEach, afterEach, inject, module, chai */

var expect = chai.expect;

describe('mainController', function() {
    
    var scope;
    var httpBackend;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($rootScope, $controller, $http, $httpBackend) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        $controller('mainController', {$scope: scope, $http: $http});
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });  
  
    it('message', function() {
        expect(scope.message).to.equal('Hello world');
    });
    
    it('getMessage', function() {
        // arrange
        httpBackend.when('GET', 'message').respond({ message: 'Goodbye cruel world' });
        
        // act
        scope.getMessage();
        
        // assert
        httpBackend.flush();
        expect(scope.message).to.equal('Goodbye cruel world');
    });
});