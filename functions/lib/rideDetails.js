"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NEXT_RIDE = "next";
const PREVIOUS_RIDE = "previous";
const TODAYS_RIDE = "todays";
const TOMORROWS_RIDE = "tomorrows";
class RideDetails {
    /**
     * Builds the text details of the ride to be returned to the Google Assitant
     * @param {*} ride - the rides collection item
     * @param {*} rideDay - valid values: previous / next / tomorrows / todays
     * @returns {string} the text representation of a ride
     */
    buildText(ride, rideDay) {
        const rideDate = new Date(ride.date);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        let message = "";
        if (ride.isEvent) {
            message = ride.description;
            return message;
        }
        if (rideDay.toLowerCase() === PREVIOUS_RIDE) {
            message =
                `The last ride was ${rideDate.toLocaleDateString("en-gb", options)}` +
                    ` from ${ride.start} and was led by ${ride.rideLeader}` +
                    ` with lunch at ${ride.lunch}`;
            return message;
        }
        let messageStart = "";
        switch (rideDay.toLowerCase()) {
            case NEXT_RIDE:
                messageStart = "The next";
                break;
            case TODAYS_RIDE:
                messageStart = "Today's";
                break;
            case TOMORROWS_RIDE:
                messageStart = "Tomorrow's";
                break;
        }
        message =
            `${messageStart} ride is level ${ride.level} on ${rideDate.toLocaleDateString("en-gb", options)},` +
                ` being led by ${ride.rideLeader} and will be leaving from ${ride.start}` +
                ` heading for ${ride.lunch}`;
        return message;
    }
    /**
     * Returns the text for when a ride is not found for the rideDay
     * @param {*} rideDay - valid values: previous / next / tomorrows / todays
     */
    noRideDefaultText(rideDay) {
        let message = `Unknown ${rideDay}`;
        switch (rideDay.toLowerCase()) {
            case NEXT_RIDE:
                message =
                    "I am sorry but I am unable to locate the details of the next ride, you might need to check the website or Facebook";
                break;
            case PREVIOUS_RIDE:
                message =
                    "I am sorry but I am unable to locate the details of the last ride, you might need to check the website or Facebook";
                break;
            case TODAYS_RIDE:
                message =
                    "I am sorry but there is no ride today, please ask me when the next ride is";
                break;
            case TOMORROWS_RIDE:
                message =
                    "I am sorry but there is no ride tomorrow, please ask me when the next ride is";
                break;
        }
        return message;
    }
    getQueryOperation(rideDay) {
        switch (rideDay.toLowerCase()) {
            case PREVIOUS_RIDE:
                return "<";
            case TODAYS_RIDE:
                return "==";
            case TOMORROWS_RIDE:
                return "==";
            default:
                return ">=";
        }
    }
    getQueryDate(rideDay, currentDate) {
        const date = new Date(currentDate);
        date.setHours(0, 0, 0, 0);
        switch (rideDay.toLowerCase()) {
            case TOMORROWS_RIDE:
                date.setDate(date.getDate() + 1);
                break;
        }
        return date;
    }
    isValidRideDay(rideDay) {
        switch (rideDay.toLowerCase()) {
            case NEXT_RIDE:
            case PREVIOUS_RIDE:
            case TODAYS_RIDE:
            case TOMORROWS_RIDE:
                return true;
            default:
                return false;
        }
    }
}
exports.RideDetails = RideDetails;
//# sourceMappingURL=rideDetails.js.map