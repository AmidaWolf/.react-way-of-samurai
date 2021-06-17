import React from 'react';
import {NavLink} from "react-router-dom";

import style from './User.module.css';
import avatar from '../../../img/120&text=avatar.png';


const User = ({id, photoUrl, followInProgress, followed, toggleFollowUser, name, status, isAuth}) => {
    return(
        <li className={style.user_wrapper}>
            <div className={style.user}>
                <div className={style.avatar_button}>
                    <NavLink className={style.user_href} to={'/profile/' + id}>
                        <img
                            className={style.avatar}
                            src={
                                photoUrl !== null
                                    ? photoUrl : avatar
                            }
                            alt="avatar"
                            width={120}
                            height={120}
                        />
                    </NavLink>
                    <div>
                        {
                            isAuth ?
                                <button
                                    disabled={followInProgress.some(followId => followId === id)}
                                    className={style.follow_button}
                                    onClick={() => {
                                        toggleFollowUser(id, followed);
                                    }}>
                                    {!followed ? 'Follow' : 'Unfollow'}
                                </button> : null
                        }
                    </div>
                </div>
                <div className={style.user_info_wrapper}>
                    <div className={style.user_info}>
                        <NavLink className={style.user_href} to={'/profile/' + id} >
                            <h3 className={style.user_name}>{name}</h3>
                        </NavLink>
                    </div>
                    <p className={style.text}>{status}</p>
                </div>
            </div>
        </li>
    )
}

export default User;
