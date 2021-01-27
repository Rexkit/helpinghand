import { SET_AUTH_TRUE, SET_AUTH_FALSE } from "../action-types";

const initialState = {
    userId: Number(localStorage.getItem('authUserId'))
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_TRUE:
            localStorage.setItem('authUserId', action.payload);
            return {
                ...state,
                userId: Number(action.payload)
            }
        case SET_AUTH_FALSE:
            localStorage.removeItem('authUserId');
            return {
                ...state,
                userId: null
            }
        default:
            return state;
    };
}
export default authReducer;