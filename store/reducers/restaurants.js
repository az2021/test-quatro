import { GET_ALL } from "../actions/restaurents";

const initialState = {
    data: [

    ]
}
const restaurantsReducer = (state = initialState, action) => {
    // return state;
    switch (action.type) {
        case GET_ALL:
            return { data: action.data };

        default:
            return state
    }
}

export default restaurantsReducer