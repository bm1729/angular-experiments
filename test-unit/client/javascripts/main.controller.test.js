/* globals describe, it, beforeEach, inject chai */

var expect = chai.expect;

describe('mainController', function() {
    
    var scope;
    var controller;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('mainController', {$scope: scope});
    }));
  
    it('message', function() {
        expect(controller.message).to.equal('Hello world');
    });
});