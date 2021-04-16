import React from 'react';

import style from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return(
        <li className={style.user_wrapper}>
            <NavLink to={'/profile/' + props.id} className={style.user}>
                <div className={style.avatar_button}>
                    <img
                        className={style.avatar}
                        src={
                            props.photoUrl != null
                                ? props.photoUrl : "https://dummyimage.com/120&text=avatar"}
                        alt="avatar"/>
                    <div>
                        {
                            props.followed ?
                                <button
                                    className={style.follow_button}
                                    onClick={()=> {
                                        props.unfollow(props.id)
                                    }}>Unfollow
                                </button> :
                                <button
                                    className={style.follow_button}
                                    onClick={()=> {
                                        props.follow(props.id)
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
            </NavLink>


        </li>
    )
}

export default User;
