import React from 'react';

import './UserInfo.css';

const UserInfo = () => {
    return(
        <div className={'user-info'}>
            <img className={'user-info__wallpaper'} src="https://dummyimage.com/600x150&text=wallpaper" alt="wallpaper"/>
            <img className={'user-info__avatar'} src="https://dummyimage.com/120&text=avatar" alt="avatar"/>
            <div className={'user-info__text'}>
                <h2 className={'username'}>User Name</h2>
                <p className={'birthday'}>Date of Birth:</p>
                <p className={'city'}>City:</p>
                <p className={'education'}>Education:</p>
                <p className={'website'}><a href="#">lyaskimasyaski.com</a></p>
            </div>
        </div>
    )
}

export default UserInfo;