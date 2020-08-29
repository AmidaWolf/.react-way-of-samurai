import React from 'react';

//import style from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";



const Profile = (props) => {
    return(
        <div>
            <UserInfo />
            <Posts
                state={props.state}
                addPost={props.addPost}
                updNewPostText={props.updNewPostText}
            />
        </div>
    )
}

export default Profile;