import React from 'react';

//import style from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return(
        <div>
            <UserInfo profile={props.profile}/>
            <Posts />
        </div>
    )
}

export default Profile;
