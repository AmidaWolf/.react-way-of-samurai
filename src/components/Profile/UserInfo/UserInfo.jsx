import React from 'react';

import style from './UserInfo.module.css';
import Preloader from "../../Users/Preloader/Preloader";
import UserContacts from "./UserContacts/UserContacts";
import UserJob from "./UserJob/UserJob";

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
                    ? props.photoUrl : "https://dummyimage.com/120&text=avatar"
                }
                alt="avatar"
            />
            <div className={style.text}>
                <h2 className={style.username}>{props.profile.fullName}</h2>
                <p>{'About me: ' + props.profile.aboutMe}</p>
                <UserContacts contacts={props.profile.contacts}/>
                <UserJob
                    lookingForAJob={props.profile.lookingForAJob}
                    description={props.profile.lookingForAJobDescription}
                />
            </div>
        </div>
    )
}
//add bulean lookingForAJob
export default UserInfo;
