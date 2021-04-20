import React from 'react';

import style from './Header.module.css';
import AuthContainer from "../Auth/AuthContainer";
import {NavLink} from "react-router-dom";


const Header = () => {
    return(
        <header className={style.header}>
            <img className={style.logo} src="https://dummyimage.com/60&text=logo" alt="sqare"/>
            <h1 className={style.title}><NavLink to='/'>MonoChrome</NavLink></h1>
            <AuthContainer />
        </header>
    )
}

export default Header;
