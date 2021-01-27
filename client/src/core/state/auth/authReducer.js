import { SET_AUTH_TRUE, SET_AUTH_FALSE } from "../action-types";

const initialState = {
    userId: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_TRUE:
            return {
                ...state,
                userId: action.payload
            }
        case SET_AUTH_FALSE:
            return {
                ...state,
                userId: null
            }
        default:
            return state;
    };
}
export default authReducer;