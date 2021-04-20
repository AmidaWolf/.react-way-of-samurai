import {combineReducers, createStore} from "redux";
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

let store = createStore(reducers);

window.store = store;

export {store};
