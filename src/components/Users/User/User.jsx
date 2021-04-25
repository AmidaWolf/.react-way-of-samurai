import React from 'react';
import {NavLink} from "react-router-dom";

import style from './User.module.css';


const User = (props) => {
    return(
        <li className={style.user_wrapper}>
            <div className={style.user}>
                <div className={style.avatar_button}>
                    <NavLink className={style.user_href} to={'/profile/' + props.id}>
                        <img
                            className={style.avatar}
                            src={
                                props.photoUrl != null
                                    ? props.photoUrl : "https://dummyimage.com/120&text=avatar"}
                            alt="avatar"/>
                    </NavLink>
                    <div>
                        <button
                            disabled={props.followInProgress.some(id => id === props.id)}
                            className={style.follow_button}
                            onClick={() => {
                                props.toggleFollowUser(props.id, props.followed);
                            }}>
                            {!props.followed ? 'Follow' : 'Unfollow'}
                        </button>
                    </div>
                </div>
                <div className={style.user_info_wrapper}>
                    <div className={style.user_info}>
                        <NavLink className={style.user_href} to={'/profile/' + props.id} >
                            <h3 className={style.user_name}>{props.name}</h3>
                        </NavLink>
                    </div>
                    <p className={style.text}>{props.status}</p>
                </div>
            </div>
        </li>
    )
}

export default User;
