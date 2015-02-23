/* globals before, after, describe, it */

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;

var app = require('../../app');
var port = 3333;
var server;

describe('app', function() {

    before(function(done) {
        server = app.listen(port, function(err, result) {
            if (err) {
                done(err);
             } else {
                done();
             }
        });
    });
    
    after(function(done) {
        server.close(done);
    });

    it('simple integration test', function(done) {
        chai.request(app)
            .get('/message')
            .end(function(err, res) {
                expect(err).to.be.null;
                expect(res.statusCode).to.equal(200);
                expect(res.body.message).to.equal('Goodbye cruel world');
                done();
            });
    });
});