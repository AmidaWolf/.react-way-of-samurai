import React from 'react';

import style from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";

const Profile = () => {
    return(
        <div className={style.profile}>
            <UserInfo />
            <Posts />
        </div>
    )
}

export default Profile;