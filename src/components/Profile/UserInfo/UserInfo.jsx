import React, {useState} from 'react';

import style from './UserInfo.module.css';
import avatar from '../../../img/120&text=avatar.png';
import Preloader from "../../Preloader/Preloader";
import UserData from "./UserData/UserData";
import {ChangeInfoForm} from "./ChangeInfoForm/ChangeInfoForm";


const UserInfo = ({profile, status,
                      updateUserStatus, isUpdate,
                      isOwner, changeAvatar,
                      saveProfile,
                      isError, errorInfo}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile || isUpdate) {
        return(
            <Preloader />
        )
    }

    const toggleEditMode = (condition) => {
        setEditMode(condition);
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

            {
                editMode ?
                    <ChangeInfoForm
                        userId={profile.userId}
                        fullName={profile.fullName}
                        lookingForAJob={profile.lookingForAJob}
                        lookingForAJobDescription={profile.lookingForAJobDescription}
                        contacts={profile.contacts}
                        toggleEditMode={toggleEditMode}
                        saveProfile={saveProfile}
                        isUpdate={isUpdate}
                        aboutMe={profile.aboutMe}
                        isError={isError}
                        errorInfo={errorInfo}
                    /> :
                    <UserData profile={profile}
                              status={status}
                              updateUserStatus={updateUserStatus}
                              isOwner={isOwner}
                              toggleEditMode={toggleEditMode}
                    />
            }

        </div>
    )
}
export default UserInfo;
