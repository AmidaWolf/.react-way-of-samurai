import React from 'react';

import style from './UserInfo.module.css';
import avatar from '../../../img/120&text=avatar.png';
import Preloader from "../../Preloader/Preloader";
import UserContacts from "./UserContacts/UserContacts";
import UserJob from "./UserJob/UserJob";
import UserStatusHooks from "./UserStatus/UserStatusHooks";

const UserInfo = ({profile, status, updateUserStatus, isUpdate}) => {
    if (!profile || isUpdate) {
        return(
            <Preloader />
        )
    }

    return(
        <div className={style.info}>
            <img
                className={style.avatar}
                src={
                profile.photos.large !== null
                    ? profile.photos.large : avatar
                }
                alt="avatar"
            />
            <div className={style.text}>
                <h2 className={style.username}>{profile.fullName}</h2>
                <UserStatusHooks status={status} updateUserStatus={updateUserStatus}/>
                <p>About me: </p>
                <p>
                    {
                        profile.aboutMe != null ?
                            profile.aboutMe :
                            'User dont write about himself'
                    }
                </p>
                <UserContacts contacts={profile.contacts}/>
                <UserJob
                    lookingForAJob={profile.lookingForAJob}
                    description={profile.lookingForAJobDescription}
                />
            </div>
        </div>
    )
}
export default UserInfo;
