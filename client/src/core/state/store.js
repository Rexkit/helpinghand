import { createStore, combineReducers } from "redux";
import settingsReducer from './settings/settingsReducer';
import requestsReducer from './requests/requestsReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
    settings: settingsReducer,
    requests: requestsReducer,
    users: usersReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;