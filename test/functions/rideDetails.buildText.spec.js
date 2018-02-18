var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

var rideDetails = require("../../functions/rideDetails");

describe('build the text to be spoken about a ride', function() {
    it('should return the rides description when marked as an event', function () {
        const ride = {
            date: new Date(2018, 2, 18, 0, 0, 0, 0),
            isEvent: true,
            description: 'An event type ride'
        };

        const result = rideDetails.buildText(ride, 'next');
        result.should.be.equal('An event type ride');
    });

    it('should return the correct details for a next ride', function () {
        const ride = {
            date: new Date('18 February 2018'),
            isEvent: false,
            description: 'An event type ride',
            level: 'X',
            start: 'starting',
            lunch: 'food',
            rideLeader: 'person'
        };
        const result = rideDetails.buildText(ride, 'next');
        result.should.be.equal('The next ride is level X on Sunday, February 18, 2018, being led by person and will be leaving from starting heading for food');
    });

    it('should return the correct details for today\'s ride', function () {
        const ride = {
            date: new Date('19 February 2018'),
            isEvent: false,
            description: 'An event type ride',
            level: 'Y',
            start: 'startingB',
            lunch: 'foodB',
            rideLeader: 'personB'
        };
        const result = rideDetails.buildText(ride, 'todays');
        result.should.be.equal('Today\'s ride is level Y on Monday, February 19, 2018, being led by personB and will be leaving from startingB heading for foodB');
    });

    it('should return the correct details for tomorrow\'s ride', function () {
        const ride = {
            date: new Date('20 February 2018'),
            isEvent: false,
            description: 'An event type ride',
            level: 'Z',
            start: 'startingC',
            lunch: 'foodC',
            rideLeader: 'personC'
        };
        const result = rideDetails.buildText(ride, 'tomorrows');
        result.should.be.equal('Tomorrow\'s ride is level Z on Tuesday, February 20, 2018, being led by personC and will be leaving from startingC heading for foodC');
    });

    it('should return the correct details for a previous ride', function () {
        const ride = {
            date: new Date('17 February 2018'),
            isEvent: false,
            description: 'An event type ride',
            level: 'E',
            start: 'startingD',
            lunch: 'foodD',
            rideLeader: 'personD'
        };
        const result = rideDetails.buildText(ride, 'previous');
        result.should.be.equal('The last ride was Saturday, February 17, 2018 from startingD and was led by personD with lunch at foodD');
    });

});
