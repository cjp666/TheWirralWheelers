var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

var rideDetails = require("../../functions/rideDetails");

describe('Basic test', function() {
    it('should return testing', function() {
        const result = rideDetails.format({});
        result.should.be.equal('testing');
    });

    it('should return test 2', function() {
        const result = rideDetails.doSomething({});
        result.should.be.equal('test 2');
    });

    it('should not return test 3', function() {
        const result = rideDetails.doSomething({});
        result.should.not.be.equal('test 3');
    });
});
