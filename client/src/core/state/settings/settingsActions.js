import { ADD_CATEGORY } from "../action-types";

export function addCategories(payload) {
    return { type: ADD_CATEGORIES, payload };
}