import { TEST_ACTION } from "../action-types";

export function testAction(payload) {
    return { type: TEST_ACTION, payload };
}