'use strict';

// https://github.com/actions-on-google/dialogflow-facts-about-google-nodejs/blob/master/functions/index.js
// https://firebase.google.com/docs/firestore/query-data/get-data

const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const rideDetails = require('./rideDetails');

const RIDE_INTENT = 'ride';

const d = new Date();
const date = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);

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
    if (rideDay === '') {
        rideDay = 'next';
    }

    if (!rideDetails.isValidRideDay(rideDay)) {
        return assistant.tell('I do not understand what day you want to know about');
    }

    return getRide(assistant, rideDay);
}

function getRide(assistant, rideDay) {
    const queryField = 'date';
    const queryOperation = rideDetails.getQueryOperation(rideDay);
    const rideDate = rideDetails.getQueryDate(rideDate, new Date());

    return admin.firestore().collection('rides')
        .where(queryField, queryOperation, rideDate)
        .orderBy(queryField)
        .limit(1)
        .get()
        .then(rides => {
            let message = '';
            if (rides.size === 0) {
                message = rideDetails.noRideDefaultText(rideDay);
            } else {
                rides.forEach(ride => {
                    const data = ride.data();
                    message = rideDetails.buildText(ride, rideDay);
                });
            }
            return assistant.ask(appendAnythingElse(message));
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

function appendAnythingElse(message) {
    let result = message;
    if (!result.endsWith('.')) {
        result += '.';
    }
    result += ' Is there anything else I can help you with?'
    return result;
}
