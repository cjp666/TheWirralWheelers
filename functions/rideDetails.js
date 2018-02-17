'use strict'

const NEXT_RIDE = 'next';
const PREVIOUS_RIDES = 'previous';
const TODAYS_RIDE = 'todays';
const TOMORROWS_RIDE = 'tomorrows';

/**
 * Builds the text details of the ride to be returned to the Google Assitant 
 * @param {*} rides 
 * @param {*} rideDay - valid values: previous / next / tomorrows / todays
 * @returns {string} the text representation of a ride
 */
const buildText = function(rides, rideDay) {
    return 'what';
}

/**
 * Returns the text for when a ride is not found for the rideDay
 * @param {*} rideDay - valid values: previous / next / tomorrows / todays
 */
const noRideDefaultText = function(rideDay) {
    let message = `Unknown ${rideDay}`;

    switch (rideDay.toLowerCase()) {
        case NEXT_RIDE:
            message = 'I am sorry but I am unable to locate the details of the next ride, you might need to check the website or Facebook';
            break;
        case PREVIOUS_RIDES:
            message = 'I am sorry but I am unable to locate the details of the last ride, you might need to check the website or Facebook';
            break;
        case TODAYS_RIDE:
            message = 'I am sorry but there is no ride today, please ask me when the next ride is';
            break;
        case TOMORROWS_RIDE:
            message = 'I am sorry but there is no ride tomorrow, please ask me when the next ride is';
            break;
    }

    return message;
}

const getQueryOperation = function(rideDay) {
    switch (rideDay.toLowerCase()) {
        case PREVIOUS_RIDES:
            return '<';
        case TODAYS_RIDE:
            return '=';
            break;
        case TOMORROWS_RIDE:
            return '=';
        default:
            return '>=';
    }
}

const getQueryDate = function (rideDay, currentDate) {
    let date = new Date(currentDate);
    date.setHours(0, 0, 0, 0);
    switch (rideDay.toLowerCase()) {
        case TOMORROWS_RIDE:
            date.setDate(date.getDate() + 1);
            break;
    }
    return date;   
}

module.exports = { buildText, noRideDefaultText, getQueryOperation, getQueryDate };
