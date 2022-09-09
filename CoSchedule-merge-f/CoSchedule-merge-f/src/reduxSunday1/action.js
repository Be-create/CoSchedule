import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});
const userUpdated = () =>({
    type: types.UPDATE_USERS,
});

export const loadUsers = () =>{
    return function (dispatch) {
        axios
        .get(`http://localhost:8080/user`)
        .then((resp)=> {
            console.log("resp", resp);
            dispatch(getUsers(resp.data));
        })
        .catch((error) => console.log(error));
    }
}

export const updateUser = (user, id) =>{
    return function (dispatch) {
        axios
        .put(`http://localhost:8080/user/${id}`,user)
        .then((resp)=>{
            console.log("resp",resp);
            dispatch(userUpdated());
        })
        .catch((error) => console.log(error));
    }
}