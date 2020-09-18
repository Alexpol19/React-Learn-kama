import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form';

import thunkMiddleware from 'redux-thunk';
import appReducer from "./appReducer";

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");

let reducers = combineReducers({
    app: appReducer,
    profile: profileReducer,
    chat: chatReducer,
    navBar: navBarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
});

// -- connect redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
// without dev tools
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;