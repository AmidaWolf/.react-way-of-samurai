import React from 'react';

import style from './User.module.css';

const User = (props) => {
    return(
        <li className={style.user}>
            <div className={style.avatar_button}>
                <img className={style.avatar} src={props.photoUrl} alt="avatar"/>
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
            <div className={style.user_info}>
                <div className={style.user_info_wrapper}>
                    <h3 className={style.user_name}>{props.firstName + ' ' + props.shortSecondName}</h3>
                    <div>
                        <p className={style.text}>{props.city + ','}</p>
                        <p className={style.text}>{props.country}</p>
                    </div>

                </div>
                <p className={style.text}>{props.status}</p>
            </div>

        </li>
    )
}

export default User;