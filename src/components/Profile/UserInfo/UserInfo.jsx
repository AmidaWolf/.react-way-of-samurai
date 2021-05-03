import React from 'react';

import style from './UserInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import UserContacts from "./UserContacts/UserContacts";
import UserJob from "./UserJob/UserJob";
import UserStatus from "./UserStatus/UserStatus";

const UserInfo = (props) => {
    if (!props.profile) {
        return(
            <Preloader />
        )
    }

    return(
        <div className={style.info}>
            <img
                className={style.avatar}
                src={
                props.profile.photos.large != null
                    ? props.profile.photos.large : "https://dummyimage.com/120&text=avatar"
                }
                alt="avatar"
            />
            <div className={style.text}>
                <h2 className={style.username}>{props.profile.fullName}</h2>
                <UserStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                <p>About me: </p>
                <p>
                    {
                        props.profile.aboutMe != null ?
                            props.profile.aboutMe :
                            'User dont write about himself'
                    }
                </p>
                <UserContacts contacts={props.profile.contacts}/>
                <UserJob
                    lookingForAJob={props.profile.lookingForAJob}
                    description={props.profile.lookingForAJobDescription}
                />
            </div>
        </div>
    )
}
export default UserInfo;
