import { ADD_REQUESTS } from "../action-types";

export function addRequests(payload) {
    return { type: ADD_REQUESTS, payload };
}