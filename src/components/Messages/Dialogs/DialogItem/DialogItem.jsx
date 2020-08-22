import React from 'react';
import {NavLink} from "react-router-dom";

import style from './DialogItem.module.css';

const DialogItem = (props) => {
    return(
        <li className={style.itemLink}>
            <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
        </li>
    )
}


export default DialogItem;