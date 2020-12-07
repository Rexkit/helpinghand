import { ADD_CATEGORIES } from "../action-types";

const initialState = {
    requestCategories: [
        'All',
        'Grocery',
        'Medicine',
        'Other'
    ],
    isAuthenticated: false
};

function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORIES:
            return Object.assign({}, state, {
                testData: state.requestCategories.concat(action.payload)
            });
        default:
            return state;
    };
}
export default settingsReducer;