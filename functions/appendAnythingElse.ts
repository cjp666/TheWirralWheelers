export class AppendAnythingElse {
    /**
     * Takes a message and appends 'Is there anything else I can help you with?' to it,
     * ensuring that the original message ends with a full stop first
     * @param message The message to be appended to
     */
    append(message: string): string {
        let result = message;

        if (!result.endsWith(".")) {
            result += ".";
        }
        result += " Is there anything else I can help you with?";

        return result;
    }
}
