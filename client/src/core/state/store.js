import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import settingsReducer from './settings/settingsReducer';
import authReducer from './auth/authReducer';
import requestsReducer from './requests/requestsReducer';
import usersReducer from './users/usersReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    settings: settingsReducer,
    requests: requestsReducer,
    users: usersReducer,
    auth: authReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;