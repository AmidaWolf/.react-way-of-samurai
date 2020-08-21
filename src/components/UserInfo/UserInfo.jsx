import React from 'react';

import style from './UserInfo.module.css';

const UserInfo = () => {
    return(
        <div className={style.info}>
            <img className={style.wallpaper} src="https://dummyimage.com/600x150&text=wallpaper" alt="wallpaper"/>
            <img className={style.avatar} src="https://dummyimage.com/120&text=avatar" alt="avatar"/>
            <div className={style.text}>
                <h2 className={style.username}>User Name</h2>
                <p>Date of Birth:</p>
                <p>City:</p>
                <p>Education:</p>
                <p><a href="#">lyaskimasyaski.com</a></p>
            </div>
        </div>
    )
}

export default UserInfo;