// https://github.com/actions-on-google/dialogflow-facts-about-google-nodejs/blob/master/functions/index.js
// https://firebase.google.com/docs/firestore/query-data/get-data

import { DialogflowApp } from "actions-on-google";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

import { RideDetails } from "./rideDetails";

const RIDE_INTENT = "ride";

const rideDetails = new RideDetails();

let parameters = {
    rideDay: ""
};

const agent = functions.https.onRequest((request, response) => {
    const app = new DialogflowApp({ request, response });

    const actionMap = new Map();
    actionMap.set(RIDE_INTENT, findRide);

    parameters = request.body.result.parameters;

    app.handleRequest(actionMap);
});

module.exports = { agent };

function findRide(assistant) {
    let rideDay = parameters.rideDay;
    if (rideDay === "") {
        rideDay = "next";
    }
    rideDay = rideDay.toLowerCase();

    if (!rideDetails.isValidRideDay(rideDay)) {
        return assistant.tell(
            "I do not understand what day you want to know about"
        );
    }

    return getRide(assistant, rideDay);
}

function getRide(assistant, rideDay) {
    const queryField = "date";
    const queryOperation = rideDetails.getQueryOperation(rideDay);
    const rideDate = rideDetails.getQueryDate(rideDay, new Date());

    if (queryOperation === "==") {
        return admin
            .firestore()
            .collection("rides")
            .where(queryField, queryOperation, rideDate)
            .limit(1)
            .get()
            .then(rides => {
                return processRides(assistant, rides, rideDay);
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
    }

    return admin
        .firestore()
        .collection("rides")
        .where(queryField, queryOperation, rideDate)
        .orderBy(queryField)
        .limit(1)
        .get()
        .then(rides => {
            return processRides(assistant, rides, rideDay);
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
}

function processRides(assistant, rides, rideDay) {
    let message = "";
    if (rides.size === 0) {
        message = rideDetails.noRideDefaultText(rideDay);
    } else {
        rides.forEach(ride => {
            const data = ride.data();
            message = rideDetails.buildText(data, rideDay);
        });
    }
    return assistant.ask(appendAnythingElse(message));
}

function appendAnythingElse(message) {
    let result = message;
    if (!result.endsWith(".")) {
        result += ".";
    }
    result += " Is there anything else I can help you with?";
    return result;
}
