import { createStore, combineReducers } from "redux";
import settingsReducer from './settings/settingsReducer';

const rootReducer = combineReducers({
    settings: settingsReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;