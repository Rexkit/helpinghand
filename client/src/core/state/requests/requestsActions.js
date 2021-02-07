import { ADD_REQUESTS, SET_WORKER_ID, SET_WORKER_ID_SUCCESS, SET_WORKER_ID_FAILURE, GET_ALL_REQUESTS_STARTED, GET_ALL_REQUESTS_SUCCESS, GET_ALL_REQUESTS_FAILURE } from "../action-types";

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
                        type: cur.request_cat,
                        idworker: cur.idworker
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
    payload: {
        error
    }
});

export const setWorkerId = (id, uid) => {
    return dispatch => {
        axios.post('http://localhost:8080/api/dashboard/setWorker', { id, wid: uid })
            .then(res => {
                dispatch(setWorkerIdSuccess(id, uid));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const setWorkerIdSuccess = (id, uid) => ({
    type: SET_WORKER_ID_SUCCESS,
    payload: {
        id,
        uid
    }
});

const setWorkerIdFailure = error => ({
    type: SET_WORKER_ID_FAILURE,
    payload: {
        error
    }
});