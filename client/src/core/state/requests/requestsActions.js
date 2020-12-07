import { ADD_REQUESTS, GET_ALL_REQUESTS, GET_ALL_REQUESTS_STARTED, GET_ALL_REQUESTS_SUCCESS, GET_ALL_REQUESTS_FAILURE } from "../action-types";

import axios from 'axios';

export function addRequests(payload) {
    return { type: ADD_REQUESTS, payload };
}

export const getAllRequests = () => {
    return dispatch => {
        dispatch(getAllRequestsStarted());

        axios.get('http://localhost:8080/api/dashboard/getAllRequests')
            .then(res => {
                const dataObj = res.data.reduce((acc, cur) => ({
                    ...acc,
                    [cur.idrequest]: {
                        userId: cur.iduser,
                        name: cur.request_name,
                        text: cur.request_text,
                        type: cur.request_cat
                    }
                }), {})
                dispatch(getAllRequestsSuccess(dataObj));
            })
            .catch(err => {
                dispatch(getAllRequestsFailure(err.message));
            });
    }
};

const getAllRequestsStarted = () => ({
    type: GET_ALL_REQUESTS_STARTED
});

const getAllRequestsSuccess = data => ({
    type: GET_ALL_REQUESTS_SUCCESS,
    payload: {
        ...data
    }
});

const getAllRequestsFailure = error => ({
    type: GET_ALL_REQUESTS_FAILURE,
    payloda: {
        error
    }
});