import React from 'react';
import {Redirect} from "react-router-dom";

import {LoginForm} from "./LoginForm/LoginForm";


export const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <LoginForm setUserLogin={props.setUserLogin} />
}
