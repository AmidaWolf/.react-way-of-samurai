import React from 'react';

//import style from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";


const Profile = React.memo (({profile, status,
                                 updateUserStatus, isUpdate,
                                 isOwner, changeAvatar}) => {
    return(
        <div>
            <UserInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                isUpdate={isUpdate}
                isOwner={isOwner}
                changeAvatar={changeAvatar}
            />
            <Posts />
        </div>
    )
})

export default Profile;
