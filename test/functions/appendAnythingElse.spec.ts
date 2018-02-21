import { AppendAnythingElse } from "../../functions/appendAnythingElse";
import * as chai from "chai";
import { should } from "chai";
chai.should();

describe("Append Is there anything else I can help you with", () => {
    it("should add the full stop when there isn't one", () => {
        const sut = new AppendAnythingElse();
        const message = "A quick test";
        const result = sut.append(message);
        result.should.be.equal("A quick test. Is there anything else I can help you with?");
    });

    it("should not add the full stop when there isn't one", () => {
        const sut = new AppendAnythingElse();
        const message = "A quick test.";
        const result = sut.append(message);
        result.should.be.equal("A quick test. Is there anything else I can help you with?");
    });
});
