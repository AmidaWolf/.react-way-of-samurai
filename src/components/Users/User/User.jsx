import React from 'react';

import style from './User.module.css';
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser} from "../../../api/api";

const User = (props) => {
    return(
        <li className={style.user_wrapper}>
            <div className={style.user}>
                <div className={style.avatar_button}>
                    <NavLink className={style.user_href} to={'/profile/' + props.id} >
                        <img
                            className={style.avatar}
                            src={
                                props.photoUrl != null
                                    ? props.photoUrl : "https://dummyimage.com/120&text=avatar"}
                            alt="avatar"/>
                    </NavLink>
                    <div>
                        {
                            props.followed ?
                                <button
                                    className={style.follow_button}
                                    onClick={() => {
                                        unfollowUser(props.id).then(response => {
                                                if (response.resultCode === 0) {
                                                    props.unfollow(props.id)
                                                }
                                            })
                                    }}>Unfollow
                                </button> :
                                <button
                                    className={style.follow_button}
                                    onClick={() => {
                                            followUser(props.id).then(response => {
                                                if (response.resultCode === 0) {
                                                    props.follow(props.id)
                                                }
                                            })
                                    }}>Follow
                                </button>
                        }
                    </div>

                </div>
                <div className={style.user_info_wrapper}>
                    <div className={style.user_info}>
                        <h3 className={style.user_name}>{props.name}</h3>
                    </div>
                    <p className={style.text}>{props.status}</p>
                </div>
            </div>



        </li>
    )
}

export default User;
