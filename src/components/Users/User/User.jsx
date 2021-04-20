import React from 'react';

import style from './User.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '143452f7-7f67-453a-8856-3e831970545f'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(props.id)
                                                }
                                            })
                                    }}>Unfollow
                                </button> :
                                <button
                                    className={style.follow_button}
                                    onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '143452f7-7f67-453a-8856-3e831970545f'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
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
                        <div>
                            <p className={style.text}>{"props.city + ','"}</p>
                            <p className={style.text}>{"props.country"}</p>
                        </div>

                    </div>
                    <p className={style.text}>{props.status}</p>
                </div>
            </div>



        </li>
    )
}

export default User;
