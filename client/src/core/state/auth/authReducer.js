import { SET_AUTH } from "../action-types";

const initialState = {
    userId: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                userId: 1
            }
        default:
            return state;
    };
}
export default authReducer;