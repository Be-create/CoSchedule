import * as types from "./actionType";
const initialState = {
    users:[],
    user: {},
    loading: true,
}

const usersReducers = (state= initialState, action) =>{
    switch(action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
            case types.UPDATE_USERS:
                return {
                    ...state,
                    loading: false,
                }
            
        default:
            return state;
    }
   
}

export default usersReducers;

