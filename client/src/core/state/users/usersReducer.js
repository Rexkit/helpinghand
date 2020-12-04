import { ADD_USERS } from "../action-types";

const initialState = {
    users: {
        1: {
            name: 'Nikita Kuzin',
            location: 'Berlin'
        },
        2: {
            name: 'Test Test',
            location: 'TestCity'
        }
    }
};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USERS:
            return Object.assign({}, state, {
                testData: state.users.concat(action.payload)
            });
        default:
            return state;
    };
}
export default usersReducer;