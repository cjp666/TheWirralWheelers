import { DialogflowApp } from "actions-on-google";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { RideProcessor } from "./rideProcessor";

// https://github.com/actions-on-google/dialogflow-facts-about-google-nodejs/blob/master/functions/index.js
// https://firebase.google.com/docs/firestore/query-data/get-data

admin.initializeApp(functions.config().firebase);

const RIDE_INTENT = "ride";

let rideDay = "";

const agent = functions.https.onRequest((request, response) => {
    const app = new DialogflowApp({ request, response });

    const actionMap = new Map();
    const parameters = request.body.result.parameters;

    rideDay = parameters.rideDay;
    if (rideDay === "") {
        rideDay = "next";
    }
    rideDay = rideDay.toLowerCase();

    actionMap.set(RIDE_INTENT, findRide);

    app.handleRequest(actionMap);
});

module.exports = { agent };

function findRide(assistant) {
    const rp = new RideProcessor();
    return rp.getRide(assistant, rideDay);
}
