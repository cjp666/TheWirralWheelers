"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_on_google_1 = require("actions-on-google");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const rideProcessor_1 = require("./rideProcessor");
// https://github.com/actions-on-google/dialogflow-facts-about-google-nodejs/blob/master/functions/index.js
// https://firebase.google.com/docs/firestore/query-data/get-data
admin.initializeApp(functions.config().firebase);
const RIDE_INTENT = "ride";
let rideDay = "";
const agent = functions.https.onRequest((request, response) => {
    const app = new actions_on_google_1.DialogflowApp({ request, response });
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
    const rp = new rideProcessor_1.RideProcessor();
    return rp.getRide(assistant, rideDay);
}
//# sourceMappingURL=index.js.map