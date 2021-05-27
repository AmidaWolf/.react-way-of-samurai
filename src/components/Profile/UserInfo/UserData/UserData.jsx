import React from 'react';

import style from '../UserInfo.module.css';
import UserStatusHooks from "./UserStatus/UserStatusHooks";
import UserContacts from "./UserContacts/UserContacts";
import UserJob from "./UserJob/UserJob";

const UserData = ({
                      profile, status,
                      updateUserStatus, isOwner,
                      toggleEditMode
                  }) => {
    return (
        <div className={style.text}>
            <h2 className={style.username}>{profile.fullName}</h2>
            <UserStatusHooks status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
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
            {
                isOwner ?
                    <div className={style.linkWrapper}>
                        <button
                            className={style.openForm}
                            onClick={() => toggleEditMode(true)}
                        >Change info</button>
                    </div>
                    : null
            }
        </div>
    )
}
export default UserData;
