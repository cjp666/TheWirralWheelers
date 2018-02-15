'use strict';

// https://github.com/actions-on-google/dialogflow-facts-about-google-nodejs/blob/master/functions/index.js
// https://firebase.google.com/docs/firestore/query-data/get-data

const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

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
    if (!!rideDay === false) {
        rideDay = 'next';
    }

    switch (rideDay.toLowerCase()) {
        case 'next':
            return nextRide(assistant);
        case 'previous':
            previousRide(assistant);
            break;
        case 'todays':
            todaysRide(assistant);
            break;
        case 'tomorrows':
            tomorrowsRide(assistant);
            break;
        default:
            return assistant.tell('I do not understand when you want to know about');
    }
}

function nextRide(assistant) {
    return admin.firestore().collection('rides')
        .where('date', '>=', date)
        .orderBy('date')
        .limit(1)
        .get()
        .then(rides => {
            if (rides.size === 0) {
                return assistant.tell('I am sorry but I am unable to locate the details of the next ride, you might need to check the website or Facebook');
            }
            let message = 'Unable to locate the next ride';
            rides.forEach(ride => {
                const data = ride.data();
                if (data.isEvent) {
                    message = data.description;
                } else {
                    const rideDate = new Date(data.date);
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    message = `The next ride is level ${data.level} on ${rideDate.toLocaleDateString('en-gb', options)},`
                        + ` being lead by ${data.rideLeader} and will be leaving from ${data.start}`
                        + ` heading for ${data.lunch}`;
                }
            });
            return assistant.tell(message);
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

function previousRide(assistant) {
    return admin.firestore().collection('rides')
        .where('date', '<', date)
        .orderBy('date', 'desc')
        .limit(1)
        .get()
        .then(rides => {
            console.log(rides.size);
            if (rides.size === 0) {
                return assistant.tell('I am sorry but I am unable to locate the details of the last ride, you might need to check the website or Facebook');
            }
            let message = 'Unable to locate the last ride';
            rides.forEach(ride => {
                const data = ride.data();
                if (data.isEvent) {
                    message = data.description;
                } else {
                    const rideDate = new Date(data.date);
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    message = `The last ride was ${rideDate.toLocaleDateString('en-gb', options)}`
                        + ` from ${data.start} and was lead by ${data.rideLeader}`
                        + ` with lunch at ${data.lunch}`;
                }
            });
            return assistant.tell(message);
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

function todaysRide(assistant) {
    console.log('todaysRide');
    assistant.tell('There is no ride today, sorry');
}

function tomorrowsRide(assistant) {
    console.log('tomorrowsRide');
    assistant.tell('There is no ride tomorrow');
}
