import React from 'react';

import style from './UserJob.module.css';

const UserJob = ({lookingForAJob, description}) => {
    return (
        lookingForAJob ?
            <div className={style.job}>
                <p>Looking for a job: Yes</p>
                <p>Description: {description}</p>
            </div> :
            <div className={style.job}>
                <p>Looking for a job: No</p>
            </div>
    )
}

export default UserJob;
