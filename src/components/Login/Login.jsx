import React from 'react';
import {Redirect} from "react-router-dom";

import {LoginForm} from "./LoginForm/LoginForm";


export const Login = ({isAuth, setUserLogin, errorLogin}) => {
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <LoginForm
        setUserLogin={setUserLogin}
        errorLogin={errorLogin}
    />
}
