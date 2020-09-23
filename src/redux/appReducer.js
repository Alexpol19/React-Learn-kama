import { isAuthFetch } from "./authReducer";

const inintialState = {
    initialized: false,
    errorAsync: null,
}

const appReducer = (state = inintialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        case SET_ERROR:
            return {
                ...state,
                errorAsync: action.error
            }
        default:
            return state;
    }
}

// types
const SET_INITIALIZED = "SET_INITIALIZED";
const SET_ERROR = "SET_ERROR";

// actionCreators
export const setInitialized = () => {
    return{
        type: SET_INITIALIZED
    }
}
const setError = (error) => {
    return{
        type: SET_ERROR, error
    }
}
export const setErrorAsync = (error) => (dispatch) => {
    dispatch(setError(error))
    setTimeout(function(){ dispatch(setError(null)); }, 3000)
}

export const initializeApp = () => (dispatch) => {
    let isAuthResult = dispatch(isAuthFetch())

    // after 1 promise
    // isAuthResult.then((data) => {
    //     dispatch(setInitialized());
    // })
    // after more(array of promises)
    let promisesArray = [isAuthResult];
    Promise.all(promisesArray)
        .then((data) => {
            dispatch(setInitialized());
        })
}



export default appReducer;