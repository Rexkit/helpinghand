import { ADD_USERS } from "../action-types";

const initialState = {
    users: {
        1: {
            name: 'Nikita Kuzin',
            location: 'Berlin',
            email: 'nikita@test.com',
            phone: '+8888888888'
        },
        2: {
            name: 'Hesham Ahmed',
            location: 'Alexandria',
            email: 'hesham@test.com',
            phone: '+7777777777'
        },
        3: {
            name: 'Ahmed Abdullah',
            location: 'Fulda',
            email: 'ahmed@test.com',
            phone: '+6666666666'
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