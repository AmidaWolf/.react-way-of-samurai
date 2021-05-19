import React from 'react';
import {NavLink} from "react-router-dom";

import style from './DialogItem.module.css';

const DialogItem = ({id, name}) => {
    return(
        <li className={style.itemLink}>
            <NavLink to={"/messages/" + id}>{name}</NavLink>
        </li>
    )
}


export default DialogItem;
