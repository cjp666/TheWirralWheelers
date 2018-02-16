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
});
