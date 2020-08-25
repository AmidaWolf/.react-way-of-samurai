import React from 'react';

//import style from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";


const Profile = (props) => {
    return(
        <div>
            <UserInfo />
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile;