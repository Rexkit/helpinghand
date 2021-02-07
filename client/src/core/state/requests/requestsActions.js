import { ADD_REQUESTS, SET_WORKER_ID, SET_REQUEST_RESOLVED_SUCCESS, SET_REQUEST_RESOLVED_FAILURE, DELETE_REQUEST_SUCCESS, DELETE_REQUEST_FAILURE,
     SET_WORKER_ID_SUCCESS, SET_WORKER_ID_FAILURE, GET_ALL_REQUESTS_STARTED, GET_ALL_REQUESTS_SUCCESS, GET_ALL_REQUESTS_FAILURE } from "../action-types";
     
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
                        idworker: cur.idworker,
                        resolved: cur.resolved
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

export const setRequestResolved = (id) => {
    return dispatch => {
        axios.post('http://localhost:8080/api/dashboard/setRequestResolved', { id })
            .then(res => {
                dispatch(setRequestResolvedSuccess(id));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const deleteRequest = (id) => {
    return dispatch => {
        axios.post('http://localhost:8080/api/create/deleteRequest', { id })
            .then(res => {
                dispatch(deleteRequestSuccess(id));
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

const setRequestResolvedSuccess = (id) => ({
    type: SET_REQUEST_RESOLVED_SUCCESS,
    payload: {
        id
    }
});

const setRequestResolvedFailure = error => ({
    type: SET_REQUEST_RESOLVED_FAILURE,
    payload: {
        error
    }
});

const deleteRequestSuccess = (id) => ({
    type: DELETE_REQUEST_SUCCESS,
    payload: {
        id
    }
});

const deleteRequestFailure = error => ({
    type: DELETE_REQUEST_FAILURE,
    payload: {
        error
    }
});
