var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

var rideDetails = require("../../functions/rideDetails");

const NO_RIDE_TODAY = 'I am sorry but there is no ride today, please ask me when the next ride is';

describe('no ride found message', function () {
    it('should return no last ride found', function () {
        const result = rideDetails.noRideDefaultText('previous');
        result.should.be.equal('I am sorry but I am unable to locate the details of the last ride, you might need to check the website or Facebook');
    });
    it('should return no next ride found', function () {
        const result = rideDetails.noRideDefaultText('next');
        result.should.be.equal('I am sorry but I am unable to locate the details of the next ride, you might need to check the website or Facebook');
    });
    it('should return no ride found for today', function () {
        const result = rideDetails.noRideDefaultText('todays');
        result.should.be.equal(NO_RIDE_TODAY);
    });
    it('should return no ride found for tomorrow', function () {
        const result = rideDetails.noRideDefaultText('tomorrows');
        result.should.be.equal('I am sorry but there is no ride tomorrow, please ask me when the next ride is');
    });
    it('should return unknown', function () {
        const result = rideDetails.noRideDefaultText('someotherday');
        result.should.be.equal('Unknown someotherday');
    });
});

describe.skip('the details of a ride', function () {
    it('should return no ride when there are no rides available', function () {
        const result = rideDetails.buildText([], 'todays');
        result.should.be.equal(NO_RIDE_TODAY);
    });
});

describe('query operation', function() {
    it('should return = for today', function() {
        const result = rideDetails.getQueryOperation('todays');
        result.should.be.equal('=');
    });

    it('should return = for tomorrow', function() {
        const result = rideDetails.getQueryOperation('tomorrows');
        result.should.be.equal('=');
    });

    it('should return < for previous', function() {
        const result = rideDetails.getQueryOperation('previous');
        result.should.be.equal('<');
    });

    it('should return >= for next', function() {
        const result = rideDetails.getQueryOperation('next');
        result.should.be.equal('>=');
    });
});

describe('query date', function () {
    it('should return the same date for previous rides', function () {
        const date = new Date(2018, 2, 17, 13, 7, 0, 0);
        const result = rideDetails.getQueryDate('previous', date);
        result.getTime().should.be.equal(new Date(2018, 2, 17, 0, 0, 0, 0).getTime());
    });

    it('should return the same date for next rides', function () {
        const date = new Date(2018, 2, 17, 13, 7, 0, 0);
        const result = rideDetails.getQueryDate('next', date);
        result.getTime().should.be.equal(new Date(2018, 2, 17, 0, 0, 0, 0).getTime());
    });

    it('should return the same date for todays rides', function () {
        const date = new Date(2018, 2, 17, 13, 7, 0, 0);
        const result = rideDetails.getQueryDate('todays', date);
        result.getTime().should.be.equal(new Date(2018, 2, 17, 0, 0, 0, 0).getTime());
    });

    it('should return the next day for tomorrows rides', function () {
        const date = new Date(2018, 2, 17, 13, 7, 0, 0);
        const result = rideDetails.getQueryDate('tomorrows', date);
        result.getTime().should.be.equal(new Date(2018, 2, 18, 0, 0, 0, 0).getTime());
    });
});
