import { TEST_ACTION } from "../action-types";

const initialState = {
    testData: []
};

function testReducer(state = initialState, action) {
    if (action.type === TEST_ACTION) {
        return Object.assign({}, state, {
            testData: state.testData.concat(action.payload)
        });
    }
    return state;
};

export default testReducer;