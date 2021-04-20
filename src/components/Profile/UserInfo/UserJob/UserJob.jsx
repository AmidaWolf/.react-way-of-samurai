import React from 'react';

import style from './UserJob.module.css';

const UserJob = (props) => {
    let job;
    props.lookingForAJob ? job=(
        <div className={style.job}>
            <p>Looking for a job: Yes</p>
            <p>{props.description}</p>
        </div>
    ) : job=(
        <div className={style.job}>
            <p>Looking for a job: No</p>
        </div>
    );

    return job;
}

export default UserJob;