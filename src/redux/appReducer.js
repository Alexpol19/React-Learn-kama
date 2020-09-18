import { isAuthFetch } from "./authReducer";

const inintialState = {
    initialized: false,
}

const appReducer = (state = inintialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

// types
const SET_INITIALIZED = "SET_INITIALIZED";

// actionCreators
export const setInitialized = () => {
    return{
        type: SET_INITIALIZED
    }
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