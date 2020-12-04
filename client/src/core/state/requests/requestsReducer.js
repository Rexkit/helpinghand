import { ADD_REQUESTS } from "../action-types";

const initialState = {
    requests: [{
            requestName: "Help me to buy some groceries",
            requestText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu tempor, pulvinar diam id, volutpat est. Suspendisse mi nisl, sodales eget imperdiet in, congue eget mi.",
            userId: 1
        },
        {
            requestName: "Help me to buy some medicals",
            requestText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu tempor, pulvinar diam id, volutpat est. Suspendisse mi nisl, sodales eget imperdiet in, congue eget mi.",
            userId: 2
        },
        {
            requestName: "Help me to buy some medicals",
            requestText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu tempor, pulvinar diam id, volutpat est. Suspendisse mi nisl, sodales eget imperdiet in, congue eget mi.",
            userId: 2
        },
        {
            requestName: "Help me to buy some medicals",
            requestText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu tempor, pulvinar diam id, volutpat est. Suspendisse mi nisl, sodales eget imperdiet in, congue eget mi.",
            userId: 2
        },
        {
            requestName: "Help me to buy some medicals",
            requestText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu tempor, pulvinar diam id, volutpat est. Suspendisse mi nisl, sodales eget imperdiet in, congue eget mi.",
            userId: 2
        },
        {
            requestName: "Help me to buy some medicals",
            requestText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu tempor, pulvinar diam id, volutpat est. Suspendisse mi nisl, sodales eget imperdiet in, congue eget mi.",
            userId: 2
        }
    ]
};

function requestsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_REQUESTS:
            return Object.assign({}, state, {
                testData: state.requests.concat(action.payload)
            });
        default:
            return state;
    };
}
export default requestsReducer;