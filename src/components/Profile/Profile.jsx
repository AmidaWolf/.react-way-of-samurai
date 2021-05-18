import React from 'react';

//import style from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";


const Profile = React.memo ((props) => {
    return(
        <div>
            <UserInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isUpdate={props.isUpdate}
            />
            <Posts />
        </div>
    )
})

export default Profile;
