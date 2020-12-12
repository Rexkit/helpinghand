import { ADD_USERS } from "../action-types";

const initialState = {
    users: {
        1: {
            name: 'Nikita Kuzin',
            location: 'Berlin',
            email: 'test@test.com',
            phone: '+8888888888'
        },
        2: {
            name: 'Test Test',
            location: 'TestCity',
            email: 'test1@test.com',
            phone: '+7777777777'
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