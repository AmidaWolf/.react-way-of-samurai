import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {navigationReducer} from "./navigation-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    navigationBlock : navigationReducer,
    usersPage : usersReducer,
    auth : authReducer,
    app : appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //for redux-dev-tools extension
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// const store = createStore(reducers, applyMiddleware(thunkMiddleware)); //for production

window.store = store;

export {store};
