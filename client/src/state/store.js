import { createStore, combineReducers } from "redux";
import testReducer from './test/testReducer';

const rootReducer = combineReducers({
    test: testReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;