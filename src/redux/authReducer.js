import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form"

const inintialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = inintialState, action) => {
    switch(action.type) {
        case SetAuthData: {
            return {
                ...state,
                ...action.data            }
        }

        default:
            return state;
    }
}

// types
const SetAuthData = 'setAuthData'

// actionCreators
export const setAuthData = (id, email, login, auth) => {
    return {
        type: SetAuthData,
        data: {
            id,
            email,
            login, 
            isAuth: auth,
        }
    }
}


export const isAuthFetch = () => (dispatch) => {
    return authAPI.auth()
    .then((data) => {
        if(data.resultCode === 0){
            let {id, login, email} = data.data;
            let auth = true;
            dispatch(setAuthData(id, email, login, auth))
        }
        else if(data.resultCode === 1){
            let auth = false;
            dispatch(setAuthData(null, null, null, auth))
        }
    })
}
export const login = (loginData) => (dispatch) => {
    authAPI.login(loginData)
    .then((data) => {
        if(data.resultCode === 0){
            dispatch(isAuthFetch())
        } else {
            let message = data.messages.length > 0 ? data.messages : "Some error!"
            let action = stopSubmit("login", { _error: message,})
            dispatch(action);
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
    .then((data) => {
        if(data.resultCode === 0){
            dispatch(isAuthFetch())
        }
    })
}

export default authReducer;