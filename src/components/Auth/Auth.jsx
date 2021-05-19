import React from 'react';
import {NavLink} from "react-router-dom";

import style from "../Auth/Auth.module.css";
import avatar from '../../img/60&text=avatar.png';


const Auth = ({isAuth, login, photoURL, setUserLogout}) => {
    return (
        <div className={style.auth_wrapper}>
            {
                isAuth ?
                    <NavLink className={style.link} to={'/profile'}>
                        <div className={style.auth}>
                            <p className={style.profile}>{login}</p>
                            <img className={style.logo}
                                 src={
                                     photoURL != null
                                         ? photoURL :
                                         avatar
                                 } alt="logged user"/>
                            <button className={style.logout} onClick={setUserLogout} type={'button'}>Logout</button>
                        </div>
                    </NavLink>
                     :
                    <NavLink className={style.link} to={'/login'}>Login</NavLink>
            }
        </div>
    )
}

export default Auth;
