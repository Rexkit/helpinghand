import { SET_AUTH_FALSE, SET_AUTH_TRUE } from '../action-types';

export const setAuthTrue = () => ({
    type: SET_AUTH_TRUE
});

export const setAuthFalse = () => ({
    type: SET_AUTH_FALSE
});