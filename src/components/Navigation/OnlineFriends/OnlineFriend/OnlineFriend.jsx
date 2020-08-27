import React from 'react';
import {NavLink} from "react-router-dom";

import style from './OnlineFriend.module.css';


const OnlineFriend = (props) => {
    return(
            <li className={style.item}>
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
            </li>

    )
}

export default OnlineFriend;