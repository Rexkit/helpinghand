import { GET_ALL_REQUESTS_SUCCESS, GET_ALL_REQUESTS_STARTED, GET_ALL_REQUESTS_FAILURE, SET_WORKER_ID_SUCCESS,
    SET_REQUEST_RESOLVED_SUCCESS } from "../action-types";

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
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                requests: {}
            };
        case SET_WORKER_ID_SUCCESS:
            const updatedRequest = {
                ...state.requests[action.payload.id],
                idworker: action.payload.uid
            }
            return {
                ...state,
                requests: {
                    ...state.requests,
                    [action.payload.id]: updatedRequest
                }
            }
        case SET_REQUEST_RESOLVED_SUCCESS:
            const updatedRequest2 = {
                ...state.requests[action.payload.id]
            }
            return {
                ...state,
                requests: {
                    ...state.requests,
                    [action.payload.id]: updatedRequest2
                }
            }
        default:
            return state;
    };
}
export default requestsReducer;