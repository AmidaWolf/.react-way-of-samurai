import React from 'react';

import style from './Message.module.css';


const Message = ({name, text}) => {
    return (
        <div className={style.message}>
            <div>
                <img src="https://dummyimage.com/60&text=avatar" alt="avatar"/>
                <h3 className={style.name}>{name}</h3>
            </div>
            <p className={style.messageText}>{text}</p>
        </div>
    )
}

export default Message;
