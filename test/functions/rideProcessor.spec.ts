import * as chai from "chai";
import { expect, should } from "chai";
chai.should();
import { RideProcessor } from "../../functions/rideProcessor";

describe("Construct new RideProcessor", () => {
    it("should create a new instance with any exceptions being thrown", () => {
        const result = new RideProcessor();
        expect(result).to.not.be.null;
    });
});
