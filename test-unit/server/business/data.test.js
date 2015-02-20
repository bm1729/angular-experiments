/* globals describe, it */

var expect = require('chai').expect;
var target = require('../../../src/server/business/data');

describe('business/data', function() {
    it('simple unit test', function() {
        expect(target.getMessage().message).to.equal('Goodbye cruel world');
    });
});