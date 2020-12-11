import { GET_ALL_REQUESTS_SUCCESS, GET_ALL_REQUESTS_STARTED, GET_ALL_REQUESTS_FAILURE } from "../action-types";

const initialState = {
    requests: {},
    loading: false,
    error: null
};

function requestsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                requests: action.payload
            };
        case GET_ALL_REQUESTS_STARTED:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_ALL_REQUESTS_FAILURE:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                requests: {}
            };
        default:
            return state;
    };
}
export default requestsReducer;