import React from 'react';

import style from './UserInfo.module.css';
import avatar from '../../../img/120&text=avatar.png';
import Preloader from "../../Preloader/Preloader";
import UserContacts from "./UserContacts/UserContacts";
import UserJob from "./UserJob/UserJob";
import UserStatusHooks from "./UserStatus/UserStatusHooks";

const UserInfo = ({profile, status,
                      updateUserStatus, isUpdate,
                      isOwner, changeAvatar}) => {
    if (!profile || isUpdate) {
        return(
            <Preloader />
        )
    }

    const onNewAvatarSelected = (e) => {
        if (e.target.files.length) {
            changeAvatar(e.target.files[0])
        }
    }

    return(
        <div className={style.info}>
            <div className={style.avatarWrapper}>
                <img
                    className={isOwner ? style.avatar : style.otherAvatar}
                    src={
                        profile.photos.large !== null
                            ? profile.photos.large : avatar
                    }
                    alt="avatar"
                />
                {
                    isOwner ?
                        <>
                            <input
                                type={'file'}
                                name={'avatarFile'}
                                id={'avatarFile'}
                                className={style.avatarInput}
                                onChange={onNewAvatarSelected}
                            />
                            <label htmlFor={'avatarFile'} className={style.button}>
                                Upload new avatar
                            </label>
                        </>
                        : null
                }
            </div>

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
            </div>
        </div>
    )
}
export default UserInfo;
