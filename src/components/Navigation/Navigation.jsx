import React from 'react';
import {NavLink} from "react-router-dom";

import style from './Navigation.module.css';
import OnlineFriends from "./OnlineFriends/OnlineFriends";


const Navigation = () => {
    return(
        <nav className={style.nav}>
            <ul className={style.menu}>
                <li className={style.item}>
                    <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/messages" activeClassName={style.activeLink}>Messages</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
                </li>
            </ul>
            <OnlineFriends />
        </nav>
    )
}

export default Navigation;
