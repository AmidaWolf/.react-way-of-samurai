import React from 'react';

import style from './Header.module.css';
import logo from '../../img/60&text=logo.png';
import AuthContainer from "../Auth/AuthContainer";
import {NavLink} from "react-router-dom";


const Header = () => {
    return(
        <header className={style.header}>
            <img className={style.logo} src={logo} alt="logo"/>
            <h1 className={style.title}><NavLink to='/'>MonoChrome</NavLink></h1>
            <AuthContainer />
        </header>
    )
}

export default Header;
