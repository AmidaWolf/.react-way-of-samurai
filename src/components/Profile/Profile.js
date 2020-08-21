import React from 'react';

import './Profile.css'
import UserInfo from "../UserInfo/UserInfo";
import Posts from "../Posts/Posts";

const Profile = () => {
    return(
        <div className={'profile'}>
            <UserInfo />
            <Posts />
        </div>
    )
}

export default Profile;