import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {navigationReducer} from "./navigation-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    navigationBlock : navigationReducer,
    usersPage : usersReducer,
    auth : authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export {store};
