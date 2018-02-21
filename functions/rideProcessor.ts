import { RideDetails } from "./rideDetails";
import { AppendAnythingElse } from "./appendAnythingElse";
import * as admin from "firebase-admin";

const rideDetails = new RideDetails();
const appendAnythingElse = new AppendAnythingElse();

export class RideProcessor {
    rideDetails: RideDetails;
    appendAnythingElse: AppendAnythingElse;

    constructor() {
        this.rideDetails = new RideDetails();
        this.appendAnythingElse = new AppendAnythingElse();
    }

    getRide(assistant, rideDay: string) {
        if (!rideDetails.isValidRideDay(rideDay)) {
            return assistant.tell("I do not understand what day you want to know about");
        }

        const queryField = "date";
        const queryOperations = rideDetails.getQueryOperation(rideDay);
        const rideDate = rideDetails.getQueryDate(rideDay, new Date());

        const queryOperation = queryOperations[0];
        const queryDirection = queryOperations[1];

        if (queryOperation === "==") {
            return admin
                .firestore()
                .collection("rides")
                .where(queryField, queryOperation, rideDate)
                .limit(1)
                .get()
                .then(rides => {
                    return this.processRides(assistant, rides, rideDay);
                })
                .catch(error => {
                    console.error(error);
                    throw error;
                });
        }

        return admin
            .firestore()
            .collection("rides")
            .where(queryField, queryOperation as any, rideDate)
            .orderBy(queryField, queryDirection as any)
            .limit(1)
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
        } else {
            rides.forEach(ride => {
                const data = ride.data();
                message = rideDetails.buildText(data, rideDay);
            });
        }
        return assistant.ask(appendAnythingElse.append(message));
    }
}
