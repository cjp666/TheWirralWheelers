'use strict';

// https://github.com/actions-on-google/dialogflow-facts-about-google-nodejs/blob/master/functions/index.js

const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

const RIDE_INTENT = 'ride';

let parameters = {};

const agent = functions.https.onRequest((request, response) => {
    const app = new DialogflowApp({ request, response });

    let actionMap = new Map();
    actionMap.set(RIDE_INTENT, findRide);

    console.log(`parameters: ${JSON.stringify(request.body.result.parameters)}`);

    parameters = request.body.result.parameters;

    app.handleRequest(actionMap);
});

module.exports = { agent };

function findRide(assistant) {
    let rideDay = parameters.rideDay;
    if (!!rideDay === false) {
        rideDay = 'next';
    }

    switch(rideDay.toLowerCase()) {
        case 'next':
            return nextRide(assistant);
        case 'previous':
            return previousRide(assistant);
        case 'todays':
            return todaysRide(assistant);
        case 'tomorrows':
            return tomorrowsRide(assistant);
        default:
            assistant.tell('I do not understand when you want to know about');
    }
}

function nextRide(assistant) {
    console.log('nextRide');
    assistant.tell('There is no next ride');
}

function previousRide(assistant) {
    console.log('previousRide');
    assistant.tell('There is no previous ride');
}

function todaysRide(assistant) {
    console.log('todaysRide');
    assistant.tell('There is no ride today, sorry');
}

function tomorrowsRide(assistant) {
    console.log('tomorrowsRide');
    assistant.tell('There is no ride tomorrow');
}