"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rideDetails_1 = require("./rideDetails");
const appendAnythingElse_1 = require("./appendAnythingElse");
const admin = require("firebase-admin");
const rideDetails = new rideDetails_1.RideDetails();
const appendAnythingElse = new appendAnythingElse_1.AppendAnythingElse();
class RideProcessor {
    constructor() {
        this.rideDetails = new rideDetails_1.RideDetails();
        this.appendAnythingElse = new appendAnythingElse_1.AppendAnythingElse();
    }
    getRide(assistant, rideDay) {
        if (!rideDetails.isValidRideDay(rideDay)) {
            return assistant.tell("I do not understand what day you want to know about");
        }
        const queryField = "date";
        const queryOperations = rideDetails.getQueryOperation(rideDay);
        const rideDate = rideDetails.getQueryDate(rideDay, new Date());
        const queryOperation = queryOperations[0];
        const queryDirection = queryOperations[1];
        let query;
        if (queryOperation === "==") {
            query = admin
                .firestore()
                .collection("rides")
                .where(queryField, queryOperation, rideDate)
                .limit(1);
        }
        else {
            query = admin
                .firestore()
                .collection("rides")
                .where(queryField, queryOperation, rideDate)
                .orderBy(queryField, queryDirection)
                .limit(1);
        }
        return query
            .get()
            .then(rides => {
            return this.processRides(assistant, rides, rideDay);
        })
            .catch(error => {
            console.error(error);
            throw error;
        });
    }
    processRides(assistant, rides, rideDay) {
        let message = "";
        if (rides.size === 0) {
            message = rideDetails.noRideDefaultText(rideDay);
        }
        else {
            rides.forEach(ride => {
                const data = ride.data();
                message = rideDetails.buildText(data, rideDay);
            });
        }
        return assistant.ask(appendAnythingElse.append(message));
    }
}
exports.RideProcessor = RideProcessor;
//# sourceMappingURL=rideProcessor.js.map