import React from 'react';
import {NavLink} from "react-router-dom";

import style from "../Auth/Auth.module.css";


const Auth = (props) => {
    return (
        <div>
            {
                props.isAuth ?
                    <div className={style.auth}>
                        <p className={style.profile}>{props.login}</p>
                        <img className={style.logo}
                             src={
                                 props.photoURL != null
                                     ? props.photoURL :
                                     "https://dummyimage.com/60&text=avatar"
                             } alt="logged user"/>
                    </div> :
                    <NavLink className={style.link} to={'/login'}>Login</NavLink>
            }
        </div>
    )
}

export default Auth;
