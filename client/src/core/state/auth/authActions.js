import { SET_AUTH_FALSE, SET_AUTH_TRUE } from '../action-types';

export const setAuthTrue = id => ({
    type: SET_AUTH_TRUE,
    payload: id
});

export const setAuthFalse = () => ({
    type: SET_AUTH_FALSE
});